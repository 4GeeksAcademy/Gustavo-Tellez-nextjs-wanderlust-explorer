"use client";

import { Suspense, type ReactNode } from "react";
import { FavoritesProvider } from "@/hooks/FavoritesProvider";
import Navbar from "@/components/Navbar";

function NavbarFallback() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <span className="text-lg font-semibold tracking-tight text-[#07111E]">
          Wanderlust
        </span>
      </div>
    </nav>
  );
}

export default function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <FavoritesProvider>
      <Suspense fallback={<NavbarFallback />}>
        <Navbar />
      </Suspense>
      <main className="flex-1">{children}</main>
    </FavoritesProvider>
  );
}