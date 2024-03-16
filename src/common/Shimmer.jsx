import React from "react";
import "./shimmer.css";

export const Shimmer = () => {
  return (
    <div className="card card-wrapper">
      <div className="shimmerBG media"></div>
      <div className="shimmer-wrapper">
        <div className="shimmerBG title-line"></div>
        <div className="shimmerBG content-line m-t-24"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line end"></div>
      </div>
    </div>
  );
};
