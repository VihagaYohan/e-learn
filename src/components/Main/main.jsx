import Dashboard from "../../pages/Dashboard/dashboard";
import PageTitle from "../PageTitle/PageTitle";
import { Outlet } from "react-router-dom";
import "./main.css";

// pages
import CoursePage from "../../pages/Courses/course";

function Main() {
  return (
    <main id="main" className="main">
      {/* <PageTitle page="Dashboard" /> */}
      {/* <Dashboard /> */}
      <Outlet></Outlet>
    </main>
  );
}

export default Main;
