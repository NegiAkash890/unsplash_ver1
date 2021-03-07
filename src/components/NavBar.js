import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { login, logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function NavBar() {
  const history = useHistory();
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout);
      redirect("/login");
    });
  };
  const redirect = (path) => {
    history.push(path);
  };
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
          <i id="logout" onClick={signOut}>
            <FontAwesomeIcon icon={faUser} size="2x" />
            <span>{user ? "LogOut" : "Login"}</span>
          </i>
          <i>
            <FontAwesomeIcon icon={faBell} size="2x" />
            <span>Notify</span>
          </i>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
