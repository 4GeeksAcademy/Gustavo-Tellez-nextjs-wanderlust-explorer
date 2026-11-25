"use client";

import { useCallback, useMemo, useState } from "react";
import type { Experience } from "@/data/experiences";

/**
 * Shared in-memory favorites state hook.
 * Wrap this in a context provider at the root layout to share state
 * across Navbar, cards, detail, Favorites, and Profile.
 */
export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<Set<number>>(new Set());

  const isFavorite = useCallback(
    (id: number) => favoriteIds.has(id),
    [favoriteIds],
  );

  const toggleFavorite = useCallback(
    (id: number) => {
      setFavoriteIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    },
    [],
  );

  const removeFavorite = useCallback((id: number) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const favoritesList = useMemo(
    () => (experiences: Experience[]) =>
      experiences.filter((e) => favoriteIds.has(e.id)),
    [favoriteIds],
  );

  return {
    favoriteIds,
    isFavorite,
    toggleFavorite,
    removeFavorite,
    favoritesList,
    count: favoriteIds.size,
  };
}

export type FavoritesState = ReturnType<typeof useFavorites>;