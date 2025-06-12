interface MovieTitleProps {
  title: string;
  year: string;
}

export const MovieTitle = ({ title, year }: MovieTitleProps) => (
  <h1 className="text-3xl font-bold mb-2 text-amber-400">
    {title} ({year})
  </h1>
);
