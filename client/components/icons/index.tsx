import { SVGProps } from "react";

type IconProps = {
  className?: string;
};

export const LoveIcon = ({ className } : IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    stroke="currentColor" 
    className={`w-7 h-7 text-gray-500 ${className ?? ""}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5
     -1.935 0-3.597 1.126-4.312 2.733
     -.715-1.607-2.377-2.733-4.313-2.733
     C5.1 3.75 3 5.765 3 8.25
     c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
)

export const LoveFullIcon = ({ className } : IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-7 h-7 text-red-600 ${className ?? ""}`}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
     2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
     4.5 2.09C13.09 3.81 14.76 3 16.5 3
      19.58 3 22 5.42 22 8.5c0 3.78-3.4
      6.86-8.55 11.54L12 21.35z" />
  </svg>
)