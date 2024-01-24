import "./navbar.css";
import Data from "./data";
import LogoImage from "../../assests/IMG-20230623-WA0003.jpg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(true);

  const toggle = () => {
    setShowMenu((ShowMenu) => !ShowMenu);
  };

  return (
    <nav id="nav">
      <div className="container nav-container">
        <div className="left-s">
          <img src={LogoImage} alt="LOGO" />
          <h3>
            Health<span>Check</span>
          </h3>
        </div>

        <div className="right-s">
          <div className="bars" onClick={toggle}>
            <FaBars />
          </div>
          <ul
            className="nav-links"
            style={{ display: ShowMenu ? "inherit" : "none" }}
          >
            {Data.map((link) => (
              <li key={link.id}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
