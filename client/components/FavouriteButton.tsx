"use client"

import React from "react";
import { useState } from "react";
import { LoveFullIcon, LoveIcon } from "./icons";

type FavouriteButtonProps = {
  isFavourite: boolean;
  onClick?: (favourite: boolean) => void;
};

export default function FavouriteButton({ isFavourite = false, onClick }: FavouriteButtonProps) {
  const [favourite, setFavourite] = useState<boolean>(isFavourite);

  const handleClick = () => {
    const newValue = !favourite;
    setFavourite(newValue);
    if (onClick) onClick(newValue);
  }

  return <div className="cursor-pointer" onClick={handleClick}>
    {/* Outline icon */}
    <LoveIcon
      className={`absolute text-gray-500 transition-opacity duration-200 ${favourite ? "opacity-0" : "opacity-100"}`}
    />
    {/* Filled icon */}
    <LoveFullIcon
      className={`absolute text-red-500 transition-opacity duration-200 ${favourite ? "opacity-100" : "opacity-0"}`}
    />
  </div>
}