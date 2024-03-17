import React from "react";
import { IMG_URL } from "../utils/constant";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, areaName, cuisines, avgRating } = resData;

  return (
    <>
      <div className="h-44 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={IMG_URL + cloudinaryImageId}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-3 text-lg font-medium text-gray-900 flex justify-between">
        <span className="mr-4">{name}</span>
        {avgRating < 4 ? (
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            {avgRating}
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            {avgRating}
          </span>
        )}
      </h3>
      <p className="mt-0_5 text-sm text-gray-700">{cuisines.join(", ")}</p>
      <p className="mt-0_5 text-sm text-gray-700">{areaName}</p>
    </>
  );
};
