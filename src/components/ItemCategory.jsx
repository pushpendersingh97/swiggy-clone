import React, { useState } from "react";
import { ItemList } from "./ItemList";

function Icon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export const ItemCategory = (props) => {
  const { title, itemCards } = props.items;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex flex-col border-dashed border-b-2">
      <div
        className="flex justify-between w-100 p-4 cursor-pointer"
        onClick={() => handleOpen()}
      >
        <span className="text-lg font-semibold">{title}</span>
        <span>
          <Icon id={1} open={open} />
        </span>
      </div>
        {open && itemCards.map((item) => {
          return <ItemList item={item} key={item.card.info.name} />;
        })}
    </div>
  );
};
