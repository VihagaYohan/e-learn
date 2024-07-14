import "./header.css";
import Logo from "./Logo/logo";
import Nav from "./Nav/nav";
import SearchBar from "./SearchBar/searchBar";

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      {/* logo */}
      <Logo />
      {/* search bar */}
      <SearchBar />
      {/* nav */}
      <Nav />
    </header>
  );
}

export default Header;
