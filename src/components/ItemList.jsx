import React from "react";
import { IMG_URL } from "../utils/constant";

export const ItemList = (props) => {
  const { name, imageId, description, defaultPrice, price } =
    props.item.card.info;
  return (
    <div className="flex p-6 justify-between items-center border-b-2 first:pt-0 last:border-b-0 transition-transform">
      <div className="pr-4">
        <p className="font-semibold">
          {name} - Rs {defaultPrice ? defaultPrice / 100 : price / 100}
        </p>
        <p className="text-xs">{description}</p>
      </div>
      <div className="flex relative">
        <button className="absolute bg-black text-white px-2 py-1 rounded-md -bottom-3 left-3 text-sm">
          + Add
        </button>
        <img
          className="h-20 w-35 flex-none bg-gray-50 rounded-lg"
          src={IMG_URL + imageId}
          alt={name}
        />
      </div>
    </div>
  );
};
