import Link from "next/link";
import { FC, ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant: "footer" | "header";
  external?: boolean;
}

const UiLink: FC<NavLinkProps> = ({
  href,
  children,
  variant,
  external = false,
}) => {
  const vairantClasses = {
    footer: "text-gray-400 hover:text-white",
    header: "hover:text-red-400",
  };
  return (
    <Link
      href={href}
      className={`${vairantClasses[variant]} transition-colors`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      passHref
    >
      {children}
    </Link>
  );
};

export default UiLink;
