import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const MainMenuPage = () => {
  return (
    <nav className="main-menu">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
    </nav>
  );
};

export default MainMenuPage;
