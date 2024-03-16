import React, { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constant";

export const Body = () => {
  let [listOfRestaurant, setListOfRestraunt] = useState([]);

  useEffect(() => {
    fetch(SWIGGY_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(
          data?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setListOfRestraunt(
          data?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (listOfRestaurant && listOfRestaurant.length === 0) {
    return <div className="container">No Records Found</div>;
  }

  return (
    <div className="container">
      {listOfRestaurant.map((res) => {
        return <RestaurantCard resData={res.info} key={res.info.id} />;
      })}
    </div>
  );
};
