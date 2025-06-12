import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({ children, ...props }) => (
  <button
    className="p-2 rounded-full hover:bg-gray-700 transition-colors"
    {...props}
  >
    {children}
  </button>
);
