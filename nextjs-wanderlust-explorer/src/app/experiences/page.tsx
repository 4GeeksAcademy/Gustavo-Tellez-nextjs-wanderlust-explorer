"use client";

import { Suspense, useCallback, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useExperiences } from "@/hooks/useExperiences";
import ExperienceCard from "@/components/ExperienceCard";
import Searchbar from "@/components/Searchbar";
import Filterbar from "@/components/Filterbar";
import type { ExperienceCategory } from "@/data/experiences";

function ExperiencesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read filters from URL
  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";
  const { destinations: availableDestinations } = useExperiences();

  const validCategories: ExperienceCategory[] = [
    "Adventure",
    "Culture",
    "Food",
    "Wellness",
    "Nature",
  ];
  // Normalize category param to canonical form for the dropdown display
  const normalizedCategory = (() => {
    if (!category) return "";
    const lower = category.toLocaleLowerCase();
    return (
      validCategories.find((c) => c.toLocaleLowerCase() === lower) ?? ""
    );
  })() as ExperienceCategory | "";
  // For destination, try exact match first, then check partial match
  const normalizedDestination = (() => {
    if (!destination) return "";
    const lower = destination.toLocaleLowerCase();
    const exact = availableDestinations.find(
      (d) => d.toLocaleLowerCase() === lower,
    );
    if (exact) return exact;
    // Partial match: keep the raw value for filtering but dropdown shows empty
    const partial = availableDestinations.find((d) =>
      d.toLocaleLowerCase().includes(lower),
    );
    return partial ? destination : "";
  })();

  const { experiences, destinations } = useExperiences({
    search,
    category,
    destination,
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    let changed = false;

    const searchInputFocused = document.activeElement?.id === "search";
    if (search && !search.trim() && !searchInputFocused) {
      params.delete("search");
      changed = true;
    }
    if (category && !normalizedCategory) {
      params.delete("category");
      changed = true;
    }
    if (destination && !normalizedDestination) {
      params.delete("destination");
      changed = true;
    }

    if (changed) {
      const query = params.toString();
      router.replace(`/experiences${query ? `?${query}` : ""}`, {
        scroll: false,
      });
    }
  }, [
    category,
    destination,
    router,
    search,
    searchParams,
    normalizedCategory,
    normalizedDestination,
  ]);

  // Update URL without full-page navigation
  const buildSearchParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());

      for (const [key, value] of Object.entries(updates)) {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      }

      const qs = params.toString();
      router.replace(`/experiences${qs ? `?${qs}` : ""}`, { scroll: false });
    },
    [searchParams, router],
  );

  const handleSearchChange = useCallback(
    (value: string) => buildSearchParams({ search: value }),
    [buildSearchParams],
  );

  const handleCategoryChange = useCallback(
    (value: string) => buildSearchParams({ category: value }),
    [buildSearchParams],
  );

  const handleDestinationChange = useCallback(
    (value: string) => buildSearchParams({ destination: value }),
    [buildSearchParams],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#07111E] sm:text-3xl">
          Explore Experiences
        </h1>
        <p className="mt-1 text-[#475569]">
          Discover {experiences.length} of 100 unique travel experiences
        </p>
      </div>

      {/* Controls */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="w-full sm:max-w-xs">
          <Searchbar value={search} onChange={handleSearchChange} />
        </div>
        <Filterbar
          category={normalizedCategory}
          destination={normalizedDestination}
          destinations={destinations}
          onCategoryChange={handleCategoryChange}
          onDestinationChange={handleDestinationChange}
        />
      </div>

      {/* Results */}
      {experiences.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-lg font-semibold text-[#07111E]">
            No experiences found
          </p>
          <p className="mt-2 text-sm text-[#475569]">
            Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-7xl px-4 py-20 text-center text-[#475569]">
        Loading experiences…
      </div>
    }>
      <ExperiencesContent />
    </Suspense>
  );
}