import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../lib/api/omdb";
import { Movie, SearchResponse } from "../(main)/page.types";

export const useMovieSearch = () => {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const loadInitialMovies = async () => {
      try {
        const data = await getPopularMovies();
        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.log("Error loading popular movies:", error);
      }
    };
    loadInitialMovies();
  }, []);

  const handleSearch = async () => {
    setIsInitialLoad(false);
    if (!query.trim()) {
      return;
    }

    setLoading(true);
    setHasSearched(true);
    setSubmittedQuery(query);

    try {
      const data: SearchResponse = await searchMovies(query);
      if (data.Response === "True") {
        setMovies(data.Search || []);
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.error("Error:", err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    isInitialLoad,
    query,
    setQuery,
    submittedQuery,
    movies,
    loading,
    hasSearched,
    handleSearch,
  };
};
