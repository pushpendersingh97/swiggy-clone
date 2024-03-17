import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { RestaurantCard } from "./RestaurantCard";
import { SWIGGY_GET_URL } from "../utils/constant";
import { Shimmer } from "../common/shimmer";

export const Body = () => {
  let [listOfRestaurant, setListOfRestraunt] = useState([]);
  // let [isFetching, setIsFetching] = useState(true);

  const getRestaurants = async () => {
    const response = await fetch(SWIGGY_GET_URL);
    const restaurant = await response.json();
    setListOfRestraunt(
      restaurant?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // const handleScroll = () => {
  //   if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) {
  //     return;
  //   }

  //   setIsFetching(true);
  //   getMoreRestaurants();
  // };

  // function getMoreRestaurants() {
  //   console.log("Scrolling work");
  //   setIsFetching(false);
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isFetching]);

  useEffect(() => {
    getRestaurants();
  }, []);

  if (listOfRestaurant && listOfRestaurant.length === 0) {
    return (
      <div className="container mx-auto">
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {listOfRestaurant.map((res) => (
              <Link to={res.info.id} key={res.info.id} className="group">
                <RestaurantCard resData={res.info} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
