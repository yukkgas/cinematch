import SearchIcon from "../icons/SearchIcon";
import { LoadingSpinner } from "./LoadingSpinner";

interface SearchButtonProps {
  loading: boolean;
  onClick: () => void;
}

export const SearchButton = ({ loading, onClick }: SearchButtonProps) => (
  <button
    onClick={onClick}
    disabled={loading}
    className="px-6 py-3 bg-gradient-to-r from-amber-700 to-red-700 text-amber-50 font-medium rounded-lg hover:from-amber-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
  >
    {loading ? (
      <span className="flex items-center justify-center gap-2">
        <LoadingSpinner />
        Searching...
      </span>
    ) : (
      <span className="flex items-center justify-center gap-2">
        <SearchIcon />
        Search
      </span>
    )}
  </button>
);
