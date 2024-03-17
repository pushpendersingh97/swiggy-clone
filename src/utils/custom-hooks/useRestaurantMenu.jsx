import { useState, useEffect } from "react";
import { SWIGGY_MENU_URL } from "./../constant";

export const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  const getRestaurantMenu = async () => {
    const response = await fetch(SWIGGY_MENU_URL + resId);
    const restaurant = await response.json();
    console.log(restaurant.data);

    setRestaurantMenu(restaurant.data);
  };

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  return restaurantMenu;
};
