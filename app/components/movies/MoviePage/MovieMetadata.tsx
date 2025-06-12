interface MovieMetadataProps {
  director?: string;
  actors?: string;
  runtime?: string;
  rating?: string;
}

export const MovieMetadata = ({
  director,
  actors,
  runtime,
  rating,
}: MovieMetadataProps) => (
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div>
      <h3 className="text-gray-400 text-sm">Director</h3>
      <p>{director || "Not specified"}</p>
    </div>
    <div>
      <h3 className="text-gray-400 text-sm">Cast</h3>
      <p>{actors || "Not specified"}</p>
    </div>
    <div>
      <h3 className="text-gray-400 text-sm">Runtime</h3>
      <p>{runtime || "Not specified"}</p>
    </div>
    <div>
      <h3 className="text-gray-400 text-sm">IMDB Rating</h3>
      <p className="flex items-center">
        {rating || "N/A"}
        {rating && <span className="ml-1 text-amber-400">★</span>}
      </p>
    </div>
  </div>
);
