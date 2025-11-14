"use client"

import React from "react";
import { useState } from "react";
import { LoveFullIcon, LoveIcon } from "../icons";

type FavoriteButtonProps = {
  isFavorite: boolean;
  onClick?: (favorite: boolean) => void;
};
// favorite 
export default function FavoriteButton({ isFavorite = false, onClick }: FavoriteButtonProps) {
  const [favorite, setFavorite] = useState<boolean>(isFavorite);

  const handleClick = () => {
    const newValue = !favorite;
    setFavorite(newValue);
    if (onClick) onClick(newValue);
  }

  return <div className="cursor-pointer" onClick={handleClick}>
    {/* Outline icon */}
    <LoveIcon
      className={`absolute text-gray-500 transition-opacity duration-200 ${favorite ? "opacity-0" : "opacity-100"}`}
    />
    {/* Filled icon */}
    <LoveFullIcon
      className={`absolute text-red-500 transition-opacity duration-200 ${favorite ? "opacity-100" : "opacity-0"}`}
    />
  </div>
}