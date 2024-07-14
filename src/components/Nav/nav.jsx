import NavNoice from "./NavNotice/navNotice";
import NavMessage from "./NavMessage/navMessage";
import NavAvatar from "./NavAvatar/navAvatar";

import "./nav.css";

function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNoice />
        <NavMessage />
        <NavAvatar />
      </ul>
    </nav>
  );
}

export default Nav;
