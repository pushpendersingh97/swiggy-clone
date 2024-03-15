import React from "react";
import { RestaurantCard } from "./RestaurantCard"
import { RES_DATA } from "./data";

export const Body = () => {
  return (
    <div className="container">
        {
            RES_DATA.map((res)=> {
                const { info } = res;

                return <RestaurantCard resData={info} key={info.id} />
            })
        }
    </div>
  );
};
