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
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{avgRating}</p>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {cuisines.join(", ")}
      </p>
      <p className="mt-1 text-lg font-medium text-gray-900">{areaName}</p>
    </>
  );
};
