import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login/login.jsx";
import ErrorPage from "./pages/ErrorPage/errorPage.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import Course from "./pages/Courses/course.jsx";
import StudentPage from "./pages/Students/studentPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Dashboard />,
      },
      {
        path: "/courses",
        element: <Course />,
      },
      {
        path: "/students",
        element: <StudentPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
