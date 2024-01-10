import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../utils/OpenAppBull.png";

import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <div
        className="menu"
        onClick={() => {
          menuOpen ? setMenuOpen(false) : setMenuOpen(true);
        }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/" className="title">
            Swap
          </Link>
        </li>

        <li>
          <Link to="/buy" className="title">
            Buy
          </Link>
        </li>
        <li>
          <Link to="/sell" className="title">
            Sell
          </Link>
        </li>
        <li>
          <Link to="/account" className="title">
            account
          </Link>
        </li>
        <button>connect</button>
      </ul>
    </nav>
  );
};

export default Header;
