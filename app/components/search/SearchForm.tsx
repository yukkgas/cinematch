"use client";

import { SearchFormProps } from "./types";
import { SearchInput } from "./SearchInput";
import { SearchButton } from "./SearchButton";

export const SearchForm = ({
  query,
  loading,
  onSearch,
  onQueryChange,
}: SearchFormProps) => {
  return (
    <div className="flex gap-2 w-full max-w-xl">
      <SearchInput value={query} onChange={onQueryChange} />
      <SearchButton loading={loading} onClick={onSearch} />
    </div>
  );
};
