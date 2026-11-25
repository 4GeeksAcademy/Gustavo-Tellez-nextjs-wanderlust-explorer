"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavoritesContext } from "@/hooks/FavoritesProvider";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
] as const;

const linkClasses = (active: boolean) =>
  `rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
    active
      ? "bg-[#07111E] text-white"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
  }`;

export default function Navbar() {
  const pathname = usePathname();
  const { count } = useFavoritesContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    return href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);
  }

  function badge() {
    return count > 0 ? (
      <span className="ml-1.5 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#2563EB] px-1.5 text-[11px] font-bold text-white">
        {count}
      </span>
    ) : null;
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Wanderlust home"
          className="text-lg font-semibold tracking-tight text-[#07111E]"
        >
          <span className="sm:hidden">W</span>
          <span className="hidden sm:inline">Wanderlust</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden sm:flex sm:items-center sm:gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={linkClasses(isActive(href))}
            >
              {label}
              {href === "/favorites" && badge()}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="flex sm:hidden items-center justify-center rounded-full p-2 text-[#07111E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            /* X icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="size-6">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          ) : (
            /* Hamburger icon — three horizontal lines */
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="size-6">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 sm:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="fixed top-14 left-0 right-0 z-50 flex flex-col gap-2 border-b border-slate-200/80 bg-white px-6 pb-5 pt-4 shadow-lg sm:hidden motion-reduce">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              onClick={() => setMobileOpen(false)}
              className={linkClasses(isActive(href)) + " px-3 py-2"}
            >
              {label}
              {href === "/favorites" && badge()}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}