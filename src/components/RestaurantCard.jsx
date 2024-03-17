import React from "react";
import "./restaurantCard.css";
import { IMG_URL } from "../utils/constant";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, areaName, cuisines, avgRating } = resData;

  return (
    <div className="card-wrapper">
      <div className="img-wrapper">
        <img src={IMG_URL + cloudinaryImageId} alt="" />
      </div>
      <div className="card-text">
        <p>
          <b>{name}</b>
        </p>
        <p>
          <b>{avgRating}</b>
        </p>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};
