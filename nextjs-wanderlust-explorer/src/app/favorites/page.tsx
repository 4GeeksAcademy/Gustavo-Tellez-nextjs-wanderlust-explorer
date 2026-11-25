"use client";

import Link from "next/link";
import { experiences } from "@/data/experiences";
import { useFavoritesContext } from "@/hooks/FavoritesProvider";
import ExperienceCard from "@/components/ExperienceCard";

export default function FavoritesPage() {
  const { favoritesList, count } = useFavoritesContext();
  const saved = favoritesList(experiences);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-[#07111E] sm:text-3xl">
        Your Favorites
      </h1>
      <p className="mt-1 text-[#475569]">
        {count} saved experience{count !== 1 ? "s" : ""}
      </p>

      {saved.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {saved.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-lg font-semibold text-[#07111E]">
            No favorites yet
          </p>
          <p className="mt-2 text-sm text-[#475569]">
            Start exploring and save experiences you love.
          </p>
          <Link
            href="/experiences"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#07111E] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1E293B]"
          >
            Explore Experiences
          </Link>
        </div>
      )}
    </div>
  );
}