import { useMemo } from "react";
import { experiences } from "@/data/experiences";
import type { Experience, ExperienceFilters } from "@/data/experiences";

/**
 * Returns the catalogue filtered by every active criterion.
 * Search matches titles case-insensitively; category and destination use
 * canonical values from the local catalogue.
 */
export function useExperiences(filters: ExperienceFilters = {}) {
  const { search = "", category = "", destination = "" } = filters;

  const results = useMemo(() => {
    const searchTerm = search.trim();
    const searchPattern = searchTerm ? new RegExp(
      searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "i",
    ) : null;

    return experiences.filter((experience: Experience) => {
      const matchesSearch =
        !searchPattern ||
        searchPattern.test(experience.title) ||
        searchPattern.test(experience.destination);
      const matchesCategory =
        !category ||
        experience.category.toLocaleLowerCase() ===
          category.toLocaleLowerCase();
      const matchesDestination =
        !destination ||
        experience.destination
          .toLocaleLowerCase()
          .includes(destination.toLocaleLowerCase());

      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [search, category, destination]);

  return {
    experiences: results,
    destinations: Array.from(
      new Set(experiences.map((experience) => experience.destination)),
    ).sort((a, b) => a.localeCompare(b)),
  };
}
