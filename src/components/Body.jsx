import React from "react";
import { Link } from "react-router-dom";

import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "../common/shimmer";
import { useRestaurantList } from "../utils/custom-hooks/useRestaurantList";

export const Body = () => {
  const listOfRestaurant = useRestaurantList();

  return (
    <div className="container mx-auto">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {listOfRestaurant === null ? (
            <Shimmer />
          ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {listOfRestaurant.map((res) => (
                <Link to={"/restaurant/" + res.info.id} key={res.info.id} className="group">
                  <RestaurantCard resData={res.info} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
