import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { ErrorPage, RegisterPage, Dashboard } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <div>login page</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
