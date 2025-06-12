// components/movies/MoviesList.tsx
"use client";

import { SearchResultsTitle } from "./SearchResultsTitle";
import { MoviesGrid } from "./MoviesGrid";
import { NoResults } from "./NoResults";
import { MoviesListProps } from "./types";
import { useMovieSort } from "@/app/hooks/useMovieSort";
import { SortControls } from "./SortControls";

export function MoviesList({
  movies,
  hasSearched,
  submittedQuery,
  isInitialLoad,
}: MoviesListProps) {
  const { sortedMovies, sortBy, sortOrder, setSortBy, setSortOrder } =
    useMovieSort(movies);

  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden">
      {sortedMovies.length > 0 ? (
        <>
          <div className="flex justify-between">
            <SearchResultsTitle
              query={submittedQuery}
              isInitialLoad={isInitialLoad}
            />
            <SortControls
              sortBy={sortBy}
              sortOrder={sortOrder}
              onSortByChange={setSortBy}
              onSortOrderChange={setSortOrder}
            />
          </div>
          <MoviesGrid movies={sortedMovies} />
        </>
      ) : (
        <NoResults
          hasQuery={!!submittedQuery}
          query={submittedQuery}
          hasSearched={hasSearched}
        />
      )}
    </div>
  );
}
