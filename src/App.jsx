import "./App.css";
import { Header } from "./components";
import SideBar from "./components/Sidebar/sidebar";
import Main from "./components/Main/main";
// import icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
