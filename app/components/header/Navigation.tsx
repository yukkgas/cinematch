import { FC } from "react";
import UiLink from "../ui/UiLink";

export const Navigation: FC = () => (
  <nav className="hidden md:flex space-x-6">
    <UiLink href="/" variant="header">
      Home
    </UiLink>
  </nav>
);
