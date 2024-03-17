import React from "react";
import "./PageNotFound.css";
import { useRouteError } from "react-router-dom";

export const PageNotFound = () => {
  const err = useRouteError();

  return (
    <section className="page_404">
      <div className="w-100 text-center">
        <div className="four_zero_four_bg">
          <h1 className="text-center ">404</h1>
        </div>

        <div className="contant_box_404">
          <h3 className="h2">Look like you're lost</h3>

          <p>{err.data}</p>

          <a href="/" className="link_404">
            Go to Home
          </a>
        </div>
      </div>
    </section>
  );
};
