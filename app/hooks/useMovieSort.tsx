// hooks/useMovieSort.ts
import { useState } from "react";
import { Movie } from "../components/movies/MoviesList/types";

export const useMovieSort = (initialMovies: Movie[]) => {
  const [sortBy, setSortBy] = useState<"title" | "year" | "none">("none");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedMovies = [...initialMovies].sort((a, b) => {
    if (sortBy === "none") return 0;

    let compareResult = 0;
    if (sortBy === "title") {
      compareResult = a.Title.localeCompare(b.Title);
    } else if (sortBy === "year") {
      compareResult = parseInt(a.Year) - parseInt(b.Year);
    }

    return sortOrder === "asc" ? compareResult : -compareResult;
  });

  return {
    sortedMovies,
    sortBy,
    sortOrder,
    setSortBy,
    setSortOrder,
  };
};
