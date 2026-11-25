import Link from "next/link";
import ResilientImage from "@/components/ResilientImage";
import PopularExperiencesCarousel from "@/components/PopularExperiencesCarousel";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#07111E]">
        {/* Ambient background image */}
        <ResilientImage
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1920&q=80"
          alt=""
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111E] via-[#07111E]/60 to-transparent" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-white/80 backdrop-blur">
            Discover Your Next Adventure
          </span>
          <h1 className="font-serif text-4xl font-medium italic leading-tight text-white sm:text-5xl lg:text-6xl">
            Explore{" "}
            <span className="not-italic font-sans font-bold text-white">
              Wanderlust
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Curated travel experiences from around the world — from epic
            adventures and cultural deep-dives to quiet wellness retreats.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/experiences"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-[#07111E] transition-colors hover:bg-white/90"
            >
              Explore Experiences
            </Link>
          </div>
        </div>
      </section>

      <PopularExperiencesCarousel />
    </div>
  );
}
