import { FC } from "react";
import GitHubIcon from "../icons/GitHubIcon";
import RedirectIcon from "../icons/RedirectIcon";
import UiLink from "../ui/UiLink";

export const DevelopmentInfo: FC = () => (
  <div>
    <h4 className="text-lg font-semibold mb-4">Development</h4>
    <div className="flex space-x-4 mb-4">
      <UiLink href="https://github.com/yukkgas" variant="footer">
        <GitHubIcon />
      </UiLink>
      <UiLink href="https://www.omdbapi.com" variant="footer">
        <RedirectIcon />
      </UiLink>
    </div>

    <div className="text-sm space-y-1">
      <p className="text-gray-400">Version: 1.0.0</p>
      <p className="text-gray-400">© 2023 CINEMATCH</p>
    </div>
  </div>
);
