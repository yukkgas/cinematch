import { FC } from "react";
import { Logo } from "./Logo";
import { UserControls } from "./UserControls";
import { Navigation } from "./Navigation";

export const Header: FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation />
          <UserControls />
        </div>
      </div>
    </header>
  );
};
