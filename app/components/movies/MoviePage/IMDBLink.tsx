import Link from "next/link";
import LinkIcon from "../../icons/LinkIcon";

interface IMDBLinkProps {
  imdbID: string;
}

export const IMDBLink = ({ imdbID }: IMDBLinkProps) => (
  <Link
    href={`https://www.imdb.com/title/${imdbID}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
  >
    View on IMDB
    <LinkIcon />
  </Link>
);