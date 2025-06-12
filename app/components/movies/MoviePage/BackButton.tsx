import Link from "next/link";
import BackArrowIcon from "../../icons/BackArrowIcon";

interface BackButtonProps {
  className?: string;
}

export const BackButton = ({ className = "" }: BackButtonProps) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors ${className}`}
    >
      <BackArrowIcon />
      Back to search
    </Link>
  );
};
