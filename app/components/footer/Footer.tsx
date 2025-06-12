import { Copyright } from "./Copyright";
import { DevelopmentInfo } from "./DevelopmentInfo";
import { MainInfo } from "./MainInfo";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex mb-8 justify-center gap-24">
          <MainInfo />
          <DevelopmentInfo />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};
