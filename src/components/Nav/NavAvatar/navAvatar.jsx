import "./navAvatar.css";

function NavAvatar() {
  return (
    <li className="nav-item dropdown pe-3">
      <a
        href="#"
        className="nav-link nav-profile d-flex align-items-center pe-0"
        data-bs-toggle="dropdown"
      >
        <i className="bi bi-person-circle"></i>
        <span>Yohan</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Yohan</h6>
          <span>Student</span>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            href="users-profile.html"
          >
            <li className="bi bi--person"></li>
            <span>My Profile</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            href="users-profile.html"
          >
            <li className="bi bi--person"></li>
            <span>Sign-off</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
