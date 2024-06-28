import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div>Not Found</div>
      <Link to="/">Go to main page</Link>
    </>
  );
};
