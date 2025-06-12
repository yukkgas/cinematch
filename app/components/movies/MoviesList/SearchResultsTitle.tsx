interface SearchResultsTitleProps {
  query: string;
  isInitialLoad: boolean;
}

export const SearchResultsTitle = ({
  query,
  isInitialLoad,
}: SearchResultsTitleProps) => (
  <h2 className="text-2xl font-bold mb-6 text-amber-50">
    {isInitialLoad ? (
      <>Don't forget to check out:</>
    ) : (
      <>
        Search results for: <span className="text-amber-400">"{query}"</span>
      </>
    )}
  </h2>
);
