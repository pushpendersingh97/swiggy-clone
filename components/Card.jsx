import React from "react";

export const Card = (props) => {
  const { img, name, time, cusines, area } = props;
  return (
    <div className="card-wrapper">
      <div className="img-wrapper">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e3q3szijnit5cfvx6iqu"
          alt=""
        />
      </div>
      <div className="card-text">
        <p>
          <b>{name}</b>
        </p>
        <p>
          <b>{time}</b>
        </p>
        <p>{cusines}</p>
        <p>{area}</p>
      </div>
    </div>
  );
};
