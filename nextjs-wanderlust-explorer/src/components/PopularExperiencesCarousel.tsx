"use client";

import { useState } from "react";
import { experiences, type Experience } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";

const CURATED_IDS = [1, 21, 41, 61, 81];

const curatedExperiences: Experience[] = CURATED_IDS.map(
  (id) => experiences.find((e) => e.id === id)!,
);

export default function PopularExperiencesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = curatedExperiences.length;
  const goTo = (index: number) => setActiveIndex(index);

  const prev1 = (activeIndex - 1 + total) % total;
  const next1 = (activeIndex + 1) % total;

  return (
    <section className="bg-[#F8F9FA] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-[#F1F3F5] px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-[#475569]">
            Popular Experiences
          </span>
          <h2 className="mt-3 font-serif text-2xl font-medium italic text-[#07111E] sm:text-3xl">
            Handpicked for your{" "}
            <span className="not-italic font-sans font-bold text-[#07111E]">
              next journey
            </span>
          </h2>
        </div>

        {/* Carousel wrapper */}
        <div className="relative mx-auto max-w-5xl overflow-hidden">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent" />

          {/* Previous arrow */}
          <button
            type="button"
            onClick={() => goTo(prev1)}
            aria-label="Previous experience"
            className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#07111E] shadow-lg backdrop-blur transition-all hover:bg-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] motion-reduce:transition-none"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path d="M15.5 9.5l-5-2.5-5 2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.5 14.5l-5-2.5-5 2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={() => goTo(next1)}
            aria-label="Next experience"
            className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#07111E] shadow-lg backdrop-blur transition-all hover:bg-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] motion-reduce:transition-none"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path d="M8.5 9.5l5-2.5 5 2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.5 14.5l5-2.5 5 2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Mobile: single card */}
          <div className="block sm:hidden">
            <ExperienceCard experience={curatedExperiences[activeIndex]} />
          </div>

          {/* Desktop: 5 cards always present, sliding track */}
          <div className="hidden sm:block">
            <div
              className="flex items-center gap-6 transition-transform duration-500 motion-reduce:transition-none"
              style={{ transform: `translateX(calc(50% - ${activeIndex + 1} * 44% + 22%))` }}
            >
              {curatedExperiences.map((exp, idx) => (
                <div
                  key={exp.id}
                  className={`w-[40%] flex-shrink-0 transition-all duration-500 motion-reduce:transition-none ${
                    idx === activeIndex
                      ? "scale-100 opacity-100"
                      : idx === prev1 || idx === next1
                        ? "scale-[0.85] opacity-70"
                        : "scale-[0.75] opacity-40"
                  }`}
                >
                  <ExperienceCard experience={exp} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {curatedExperiences.map((exp, idx) => (
              <button
                key={exp.id}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`Go to experience ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                  idx === activeIndex
                    ? "w-6 bg-[#2563EB]"
                    : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

