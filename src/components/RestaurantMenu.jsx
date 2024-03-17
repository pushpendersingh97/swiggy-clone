import * as React from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/custom-hooks/useRestaurantMenu";

export default function RestaurantMenu() {
  let { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) {
    <div className="container mx-auto">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <span>Wait</span>
        </div>
      </div>
    </div>;
  }

  return (
    <div className="container mx-auto">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <ul role="list" className="divide-y divide-gray-100">
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    Pushpender
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    email
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">Role</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
