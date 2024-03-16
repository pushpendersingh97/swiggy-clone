import React, { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { SWIGGY_GET_URL } from "../utils/constant";
import { Shimmer } from "../common/shimmer";

export const Body = () => {
  let [listOfRestaurant, setListOfRestraunt] = useState([]);
  let [isFetching, setIsFetching] = useState(true);

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

  if (listOfRestaurant && listOfRestaurant.length === 0 && isFetching) {
    return (
      <div className="container">
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="container">
      {listOfRestaurant.map((res) => {
        return <RestaurantCard resData={res.info} key={res.info.id} />;
      })}

      {isFetching ?? <Shimmer />}
    </div>
  );
};
