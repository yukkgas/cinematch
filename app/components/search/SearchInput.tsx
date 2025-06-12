interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Search for a movie or TV series..."
    className="flex-1 px-4 py-3 border border-amber-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent bg-gray-800 text-amber-50 placeholder-amber-500/70 shadow-sm w-max"
  />
);
