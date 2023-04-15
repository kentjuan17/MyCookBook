import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const MainMenuPage = () => {
  return (
    <nav className="main-menu">
      <NavLink to="/">Recipes</NavLink>
      <NavLink to="/add">New</NavLink>
      <NavLink to="/">Profile</NavLink>
      {/* <NavLink to="/add">Add Recipe</NavLink>
      <NavLink to="/help">Help</NavLink> */}
    </nav>
  );
};

export default MainMenuPage;
