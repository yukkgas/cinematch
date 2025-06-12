import { FC } from "react";
import SearchIcon from "../icons/SearchIcon";
import UserProfileIcon from "../icons/UserProfileIcon";
import { IconButton } from "./IconButton";

export const UserControls: FC = () => (
  <div className="hidden md:flex items-center space-x-4">
    <IconButton aria-label="Search">
      <SearchIcon />
    </IconButton>
    <IconButton aria-label="User profile">
      <UserProfileIcon />
    </IconButton>
  </div>
);
