interface MovieGenresProps {
  genres?: string;
}

export const MovieGenres = ({ genres }: MovieGenresProps) => {
  if (!genres) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {genres.split(", ").map((genre) => (
        <span
          key={genre}
          className="px-3 py-1 bg-amber-900/30 text-amber-400 rounded-full text-sm"
        >
          {genre}
        </span>
      ))}
    </div>
  );
};
