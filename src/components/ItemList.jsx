import React, { useState } from "react";
import { IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Button from "../common/Button";

export const ItemList = (props) => {
  const { name, imageId, description, defaultPrice, price } =
    props.item?.card?.info;

  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex p-6 justify-between items-center border-b-2 first:pt-0 last:border-b-0 transition-transform">
      <div className="pr-4">
        <p className="font-semibold">
          {name} - Rs {defaultPrice ? defaultPrice / 100 : price / 100}{" "}
          {props.fromCart ? (
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {props.item.quantity}
            </span>
          ) : (
            ""
          )}
        </p>
        <p className="text-xs">{description}</p>
      </div>
      <div className="flex relative justify-center">
        {!props.fromCart && (
          <Button
            onClick={() => addToCart(props.item)}
            className={
              "absolute bg-black text-white px-2 py-1 rounded-md -bottom-3  text-sm"
            }
          >
            + Add
          </Button>
        )}

        <img
          className="h-20 w-36 flex-none bg-gray-50 rounded-lg"
          src={IMG_URL + imageId}
          alt={name}
        />
      </div>
    </div>
  );
};
