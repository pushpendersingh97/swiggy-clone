import React from "react";
import { RestaurantCard } from "../common/RestaurantCard"
import { RES_DATA } from "../common/data";

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
