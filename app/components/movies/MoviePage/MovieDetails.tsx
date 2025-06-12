"use client";

import { Movie } from "@/app/(main)/page.types";
import { MovieTitle } from "./MovieTitle";
import { MovieGenres } from "./MovieGenres";
import { MovieMetadata } from "./MovieMetadata";
import { MovieDescription } from "./MovieDescription";
import { IMDBLink } from "./IMDBLink";
import { MoviePoster } from "../common/MoviePoster";

interface MovieDetailsProps {
  movie: Movie & {
    Plot?: string;
    Director?: string;
    Actors?: string;
    Genre?: string;
    Runtime?: string;
    imdbRating?: string;
  };
}

export const MovieDetails = ({ movie }: MovieDetailsProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <MoviePoster poster={movie.Poster} title={movie.Title} variant="page" />
      <div className="w-full md:w-2/3 lg:w-3/4">
        <MovieTitle title={movie.Title} year={movie.Year} />
        <MovieGenres genres={movie.Genre} />
        <MovieMetadata
          director={movie.Director}
          actors={movie.Actors}
          runtime={movie.Runtime}
          rating={movie.imdbRating}
        />
        <MovieDescription plot={movie.Plot} />
        <IMDBLink imdbID={movie.imdbID} />
      </div>
    </div>
  );
};
