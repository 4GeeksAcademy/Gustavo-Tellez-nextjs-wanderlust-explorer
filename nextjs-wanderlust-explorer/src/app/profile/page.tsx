"use client";

import { useFavoritesContext } from "@/hooks/FavoritesProvider";
import ResilientImage from "@/components/ResilientImage";

export default function ProfilePage() {
  const { count } = useFavoritesContext();

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-[#07111E] sm:text-3xl">
        Profile
      </h1>

      <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Avatar */}
        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border-2 border-slate-200">
          <ResilientImage
            src="https://media.licdn.com/dms/image/v2/D4D03AQEEjlULBm4kIg/profile-displayphoto-scale_100_100/B4DaF0f4S2HkAY-/0/1792955877729?e=1796860800&v=beta&t=arSjMe_xykBQBCBtw-OY9-34aTdpNaOoSTetOEQtS48"
            alt="User profile picture"
            className="object-cover"
          />
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold text-[#07111E]">
            Gustavo Tellez
          </h2>
          <p className="text-sm text-[#475569]">hola@gustavotellez.com</p>
          <p className="mt-1 text-sm text-[#475569]">
            Curious traveler · Backpacker · Food lover
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6 sm:justify-start">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#07111E]">{count}</p>
              <p className="text-xs text-[#475569]">Favorites</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#07111E]">100</p>
              <p className="text-xs text-[#475569]">Total Experiences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity summary */}
      <section className="mt-10 rounded-2xl border border-slate-200/80 bg-white p-6">
        <h3 className="text-lg font-semibold text-[#07111E]">Activity</h3>
        <p className="mt-2 text-sm text-[#475569]">
          You&apos;ve saved {count} experience{count !== 1 ? "s" : ""}{" "}
          to your favorites. Explore more to find your next adventure.
        </p>
      </section>
    </div>
  );
}