import React from "react";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, areaName, cuisines, avgRating } = resData;
  return (
    <div className="card-wrapper">
      <div className="img-wrapper">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt=""
        />
      </div>
      <div className="card-text">
        <p>
          <b>{name}</b>
        </p>
        <p>
          <b>{avgRating}</b>
        </p>
        <p>
          {cuisines.map((cus) => {
            return <span>{cus}, </span>;
          })}
        </p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};
