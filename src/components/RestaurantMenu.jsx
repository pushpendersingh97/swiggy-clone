import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/custom-hooks/useRestaurantMenu";
import { Shimmer } from "../common/shimmer";
import { SWIGGY_ITEM_CATEGORY } from "../utils/constant";
import { ItemCategory } from "./ItemCategory";

export default function RestaurantMenu() {
  const [showIndex, setShowIndex] = useState(0); // Lifting the state Up
  let { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) {
    return (
      <div className="container mx-auto">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <Shimmer />
          </div>
        </div>
      </div>
    );
  }

  const restaurantDetails = restaurantMenu?.cards[0];
  let restaurantMenuCard =
    restaurantMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards;

  restaurantMenuCard = restaurantMenuCard.filter(
    (res) => res.card.card["@type"] === SWIGGY_ITEM_CATEGORY
  );

  const { name, nearestOutletNudge, cuisines, avgRating } =
    restaurantDetails?.card?.card?.info;

  return (
    <div className="container mx-auto">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {name}
                </p>
                <p className="truncate text-xs leading-5 text-gray-500">
                  {cuisines.join(", ")}
                </p>
                <p className="truncate text-xs leading-5 text-gray-500">
                  {nearestOutletNudge?.nearestOutletInfo?.siblingOutlet
                    ?.areaName
                    ? nearestOutletNudge?.nearestOutletInfo?.siblingOutlet
                        ?.areaName + ", "
                    : ""}
                  {
                    nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla
                      .lastMileTravelString
                  }
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {avgRating < 4 ? (
                  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                    {avgRating}
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {avgRating}
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="border-dashed border-2"></div>

          {restaurantMenuCard.map((res, index) => {
            return (
              <ItemCategory
                key={res.card.card.title}
                items={res.card.card}
                open={index === showIndex}
                setShowIndex={() => setShowIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
