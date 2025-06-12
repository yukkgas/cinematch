import Link from "next/link";
import { MovieCardProps } from "./MovieCard.types";
import { MovieInfo } from "./MovieInfo";
import { MoviePoster } from "../common/MoviePoster";

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link
      href={`/movie/${movie.imdbID}`}
      className="block group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800 border border-gray-700 hover:border-amber-600/50 h-full"
    >
      <MoviePoster movie={movie} title={movie.Title} />
      <MovieInfo movie={movie} />
    </Link>
  );
};
