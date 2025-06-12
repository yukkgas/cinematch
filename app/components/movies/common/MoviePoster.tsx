import { Movie } from "../MovieCard";

interface MoviePosterProps {
  movie?: Movie;
  poster?: string;
  title: string;
  variant?: "card" | "page";
  className?: string;
}

export const MoviePoster = ({
  movie,
  poster = movie?.Poster,
  title,
  variant = "card",
  className = "",
}: MoviePosterProps) => {
  const imageUrl =
    poster && poster !== "N/A"
      ? poster
      : "https://static.vecteezy.com/system/resources/previews/041/647/414/non_2x/no-photo-and-blank-icon-concept-vector.jpg";

  if (variant === "page") {
    return (
      <div className={`w-full md:w-1/3 lg:w-1/4 ${className}`}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full rounded-lg shadow-lg"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://static.vecteezy.com/system/resources/previews/041/647/414/non_2x/no-photo-and-blank-icon-concept-vector.jpg";
          }}
        />
      </div>
    );
  }

  return (
    <div className={`relative aspect-[2/3] overflow-hidden ${className}`}>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://static.vecteezy.com/system/resources/previews/041/647/414/non_2x/no-photo-and-blank-icon-concept-vector.jpg";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};
