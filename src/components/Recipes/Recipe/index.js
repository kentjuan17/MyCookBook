import React from "react";
import "./styles.scss";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Recipe = ({ id, recipeName, prepTime, cookTime }) => {
  return (
    <NavLink to={"/recipes/" + id} className="recipe-component">
      <h2>{recipeName}</h2>
      <span>Prep:{prepTime}</span>
      <span>Cook:{cookTime}</span>
    </NavLink>
  );
};

export default Recipe;
