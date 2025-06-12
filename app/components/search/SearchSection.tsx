"use client";

import { SearchForm } from "./SearchForm";

interface SearchSectionProps {
  query: string;
  loading: boolean;
  onSearch: () => void;
  onQueryChange: (value: string) => void;
}

export function SearchSection({
  query,
  loading,
  onSearch,
  onQueryChange,
}: SearchSectionProps) {
  return (
    <div className="max-w-2xl mx-auto mb-12 bg-gray-800/50 p-6 rounded-xl border border-amber-800/30 shadow-lg flex justify-center">
      <SearchForm
        query={query}
        loading={loading}
        onSearch={onSearch}
        onQueryChange={onQueryChange}
      />
    </div>
  );
}
