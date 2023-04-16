import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const Recipe = ({ id, recipeName, prepTime, cookTime }) => {
  return (
    <NavLink to={"/recipes/" + id} className="recipe-component">
      <div className="recipe-card-container">
        <h2>{recipeName}</h2>
        <div className="time-container">
          <span>
            <strong>Prep:</strong> {prepTime}
          </span>
          <span>
            <strong>Cook:</strong> {cookTime}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default Recipe;
