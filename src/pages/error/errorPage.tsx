import React, { Component } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = ({ errorMessage = "Sorry, unexpected error occured" }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
