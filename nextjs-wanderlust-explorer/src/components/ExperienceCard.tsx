"use client";

import Link from "next/link";
import type { Experience } from "@/data/experiences";
import { useFavoritesContext } from "@/hooks/FavoritesProvider";
import ResilientImage from "@/components/ResilientImage";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const fav = isFavorite(experience.id);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <ResilientImage
          src={experience.imageUrl}
          alt={experience.title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Bottom gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Favorite button */}
        <button
          type="button"
          onClick={() => toggleFavorite(experience.id)}
          aria-pressed={fav}
          aria-label={
            fav
              ? `Remove ${experience.title} from favorites`
              : `Add ${experience.title} to favorites`
          }
          className={`absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full text-lg shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
            fav
              ? "bg-white text-red-500 shadow-red-200/50"
              : "bg-white/80 text-slate-400 backdrop-blur hover:bg-white hover:text-red-400"
          }`}
        >
          {fav ? "♥" : "♡"}
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
        {/* Category badge */}
        <span className="self-start rounded-full bg-[#F1F3F5] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#475569]">
          {experience.category}
        </span>

        <h3 className="text-[15px] font-semibold leading-snug text-[#07111E]">
          <Link
            href={`/experiences/${experience.id}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {experience.title}
          </Link>
        </h3>

        <p className="text-sm text-[#475569]">{experience.destination}</p>

        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="text-sm font-semibold text-[#07111E]">
            ${experience.price}
          </span>
          <span className="flex items-center gap-1 text-sm text-[#475569]">
            <span className="text-[#2563EB]">★</span>
            {experience.rating}
          </span>
        </div>
      </div>
    </article>
  );
}