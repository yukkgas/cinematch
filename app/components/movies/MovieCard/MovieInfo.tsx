import { MovieBadge } from "./MovieBagde";
import { Movie } from "./MovieCard.types";

interface MovieInfoProps {
  movie: Movie;
}

export const MovieInfo = ({ movie }: MovieInfoProps) => (
  <div className="p-4">
    <h3 className="font-bold text-lg text-amber-50 truncate group-hover:text-amber-400 transition-colors">
      {movie.Title}
    </h3>
    <p className="text-amber-500/80 font-medium">{movie.Year}</p>
    <MovieBadge />
  </div>
);
