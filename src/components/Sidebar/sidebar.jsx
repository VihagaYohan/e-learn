import { Link } from "react-router-dom";
import "./sidebar.css";

function SideBar() {
  return (
    <aside id="sidbar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Courses</span>

            <i className="bi bi-chevron-down ms-auto"></i>
          </a>

          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/courses">
                <span>List of courses</span>
              </Link>
            </li>

            <li>
              <a href="#">
                <span>Logistics</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Students</span>

            <i className="bi bi-chevron-down ms-auto"></i>
          </a>

          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/students">
                <span>All students</span>
              </Link>
            </li>

            <li>
              <a href="#">
                <span>Release Form</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span>Cancellation Form</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
