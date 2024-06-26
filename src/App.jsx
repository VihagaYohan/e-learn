import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import {
  ErrorPage,
  RegisterPage,
  Dashboard,
  AdminDashboardPage,
  TeacherDashboardPage,
  StudentDashboardPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/teachers",
        element: <TeacherDashboardPage />,
      },
      {
        path: "/students",
        element: <StudentDashboardPage />,
      },
    ],
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
