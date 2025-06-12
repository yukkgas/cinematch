// components/movies/SortControls.tsx
"use client";

interface SortControlsProps {
  sortBy: "title" | "year" | "none";
  sortOrder: "asc" | "desc";
  onSortByChange: (value: "title" | "year" | "none") => void;
  onSortOrderChange: (value: "asc" | "desc") => void;
}

export const SortControls = ({
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange,
}: SortControlsProps) => (
  <div className="flex gap-4 mb-6">
    <select
      value={sortBy}
      onChange={(e) =>
        onSortByChange(e.target.value as "title" | "year" | "none")
      }
      className="bg-gray-700 text-amber-50 px-3 py-2 rounded border border-amber-800/50 focus:ring-amber-500 focus:border-amber-500"
    >
      <option value="none">No sorting</option>
      <option value="title">Sort by Title</option>
      <option value="year">Sort by Year</option>
    </select>

    <select
      value={sortOrder}
      onChange={(e) => onSortOrderChange(e.target.value as "asc" | "desc")}
      className="bg-gray-700 text-amber-50 px-3 py-2 rounded border border-amber-800/50 focus:ring-amber-500 focus:border-amber-500"
      disabled={sortBy === "none"}
    >
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  </div>
);
