"use client";

import { EXPERIENCE_CATEGORIES } from "@/data/experiences";
import type { ValidCategory } from "@/data/experiences";

interface FilterbarProps {
  category: string;
  destination: string;
  destinations: string[];
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

export default function Filterbar({
  category,
  destination,
  destinations,
  onCategoryChange,
  onDestinationChange,
}: FilterbarProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Category */}
      <div>
        <label htmlFor="category" className="sr-only">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2.5 pr-8 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
        >
          <option value="">All Categories</option>
          {EXPERIENCE_CATEGORIES.map((cat: ValidCategory) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Destination */}
      <div>
        <label htmlFor="destination" className="sr-only">
          Destination
        </label>
        <select
          id="destination"
          value={destination}
          onChange={(e) => onDestinationChange(e.target.value)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2.5 pr-8 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
        >
          <option value="">All Destinations</option>
          {destinations.map((dest) => (
            <option key={dest} value={dest}>
              {dest}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}