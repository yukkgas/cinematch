import { FC } from "react";

export const Copyright: FC = () => (
  <div className="border-t border-gray-800 pt-6">
    <p className="text-gray-500 text-xs text-center">
      This product uses the OMDB API but is not endorsed or certified by OMDB.
    </p>
    <p className="text-gray-500 text-xs text-center mt-1">
      &copy; {new Date().getFullYear()} CINEMATCH Project.
    </p>
  </div>
);
