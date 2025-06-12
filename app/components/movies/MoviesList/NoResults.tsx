import NoResultsIcon from "../../icons/NoResultsIcon";

interface NoResultsProps {
  hasQuery: boolean;
  query: string;
  hasSearched: boolean;
}

export const NoResults = ({ hasQuery, query, hasSearched }: NoResultsProps) => (
  <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
    <NoResultsIcon />
    <p className="text-xl text-amber-100">
      {hasQuery && hasSearched ? (
        <>
          No results found for <span className="text-amber-400">"{query}"</span>
        </>
      ) : (
        "Enter a search query to find movies"
      )}
    </p>
    {hasQuery && hasSearched && (
      <p className="mt-2 text-amber-500/80">
        Try adjusting your search parameters
      </p>
    )}
  </div>
);
