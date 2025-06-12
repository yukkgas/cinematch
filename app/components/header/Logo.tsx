import Link from "next/link";
import { FC } from "react";
import LogoIcon from "../icons/LogoIcon";

export const Logo: FC = () => (
  <Link
    href="/"
    className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
    aria-label="CINEMATCH logo"
  >
    <LogoIcon />
    <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
      CINEMATCH
    </span>
  </Link>
);