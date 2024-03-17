import { useState, useEffect } from "react";
import { SWIGGY_GET_URL } from "./../constant";

export const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  const getRestaurants = async () => {
    const response = await fetch(SWIGGY_GET_URL);
    const restaurant = await response.json();
    setRestaurantList(
      restaurant?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return restaurantList;
};
