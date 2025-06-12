export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface MoviesListProps {
  movies: Movie[];
  hasSearched: boolean;
  submittedQuery: string;
  isInitialLoad: boolean;
}
