import React from "react";
import "./styles.scss";
import { IoClose } from "react-icons/io5";

const Recipe = (props) => {
  return (
    <div className="recipe">
      <h2>{props.recipeName}</h2>
      <span>Prep:{props.prepTime}</span>
      <span>Cook:{props.cookTime}</span>

      <h3>Ingredients</h3>
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>{`${ingredient.amount} ${ingredient.name}`}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <ol>
        {props.instructions.map((instruction, index) => (
          <li key={index}>{instruction.instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
