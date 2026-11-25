"use client";

import Link from "next/link";
import type { Experience } from "@/data/experiences";
import { useFavoritesContext } from "@/hooks/FavoritesProvider";
import ResilientImage from "@/components/ResilientImage";

interface DetailContentProps {
  experience: Experience;
}

export default function ExperienceDetailContent({
  experience,
}: DetailContentProps) {
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const fav = isFavorite(experience.id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/experiences"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-[#475569] transition-colors hover:text-[#07111E]"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Experiences
      </Link>

      {/* Hero image */}
      <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
        <ResilientImage
          src={experience.imageUrl}
          alt={experience.title}
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <span className="inline-block rounded-full bg-[#F1F3F5] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#475569]">
            {experience.category}
          </span>

          <h1 className="mt-3 text-2xl font-semibold text-[#07111E] sm:text-3xl">
            {experience.title}
          </h1>

          <p className="mt-2 text-[#475569]">{experience.destination}</p>

          <p className="mt-6 leading-relaxed text-[#475569]">
            {experience.description}
          </p>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 sm:w-64">
          <div className="text-center">
            <p className="text-sm text-[#475569]">Price</p>
            <p className="text-3xl font-bold text-[#07111E]">
              ${experience.price}
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-[#475569]">Rating</p>
            <p className="flex items-center justify-center gap-1 text-lg font-semibold text-[#07111E]">
              <span className="text-[#2563EB]">★</span>
              {experience.rating}
            </p>
          </div>

          <button
            type="button"
            onClick={() => toggleFavorite(experience.id)}
            aria-pressed={fav}
            aria-label={
              fav
                ? `Remove ${experience.title} from favorites`
                : `Add ${experience.title} to favorites`
            }
            className={`mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
              fav
                ? "bg-red-50 text-red-600 hover:bg-red-100"
                : "bg-[#07111E] text-white hover:bg-[#1E293B]"
            }`}
          >
            {fav ? "♥ Saved" : "♡ Save to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}