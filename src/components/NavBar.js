import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
  return (
    <div>
      <nav className="nav_bar">
        <div id="nav_logo">
          <img src={process.env.PUBLIC_URL + "/main.svg"} alt="unsplash_logo" />
        </div>
        <div id="nav_search">
          <input type="search" placeholder="Search" />
        </div>
        <div id="nav_icon">
          <i>
            <FontAwesomeIcon icon={faUser} size='lg'/>
          </i>
          <i>
            <FontAwesomeIcon icon={faBell} size='lg'/>
          </i>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
