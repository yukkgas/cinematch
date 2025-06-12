import { Movie } from "@/app/(main)/page.types";

// Базовый тип для всех пропсов MovieDetails
export interface MovieDetailsProps {
  movie: Movie & {
    Plot?: string;
    Director?: string;
    Actors?: string;
    Genre?: string;
    Runtime?: string;
    imdbRating?: string;
  };
}

export interface MoviePosterProps {
  poster: string;
  title: string;
}

export interface MovieTitleProps {
  title: string;
  year: string;
}

export interface MovieGenresProps {
  genres?: string;
}

export interface MovieMetadataProps {
  director?: string;
  actors?: string;
  runtime?: string;
  rating?: string;
}

export interface MovieDescriptionProps {
  plot?: string;
}

export interface IMDBLinkProps {
  imdbID: string;
}