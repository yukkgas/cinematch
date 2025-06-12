export interface SearchFormProps {
  query: string;
  loading: boolean;
  onSearch: () => void;
  onQueryChange: (value: string) => void;
}
