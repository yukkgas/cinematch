"use client";

import { useMovieSearch } from "../hooks/useMovieSearch";
import { MoviesList } from "../components/movies/MoviesList";
import { Header } from "../components/header";
import { SearchSection } from "../components/search";
import { Footer } from "../components/footer";

export default function HomePage() {
  const {
    query,
    setQuery,
    submittedQuery,
    movies,
    loading,
    hasSearched,
    handleSearch,
    isInitialLoad,
  } = useMovieSearch();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-8 flex-1">
        <SearchSection
          query={query}
          loading={loading}
          onSearch={handleSearch}
          onQueryChange={(value) => {
            setQuery(value);
          }}
        />

        <MoviesList
          movies={movies}
          hasSearched={hasSearched}
          submittedQuery={submittedQuery}
          isInitialLoad={isInitialLoad}
        />
      </main>
      <Footer />
    </div>
  );
}
