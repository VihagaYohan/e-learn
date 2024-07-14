/* eslint-disable react/no-unescaped-entities */
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div
      id="error-page"
      className="justify-content-center align-items-center d-flex"
    >
      <h1>Page not found!</h1>
      <p>Sorry, we couldn't find the page you were looking for.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
