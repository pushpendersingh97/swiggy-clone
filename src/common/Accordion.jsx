import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  List,
  ListItem,
  Avatar,
  Typography,
  ListItemSuffix,
} from "@material-tailwind/react";
import { IMG_URL } from "../utils/constant";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function Accordion(props) {
  const [open, setOpen] = React.useState(0);

  const { title, itemCards } = props.restaurantMenuCardDetails;

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>{title}</AccordionHeader>
        <AccordionBody>
          <List>
            {itemCards.map((item) => {
              const { name, imageId, description, defaultPrice, price } =
                item.card.info;
              return (
                <ListItem key={item.card.info.id}>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      {name} - Rs {defaultPrice ? defaultPrice/100 : price/100}
                    </Typography>
                    <Typography
                      variant="lead"
                      color="gray"
                      className="font-normal text-xs"
                    >
                      {description}
                    </Typography>
                  </div>
                  <ListItemSuffix>
                    <Avatar
                      variant="rounded"
                      alt={name}
                      src={IMG_URL + imageId}
                    />
                  </ListItemSuffix>
                </ListItem>
              );
            })}
          </List>
        </AccordionBody>
      </Accordion>
    </>
  );
}
