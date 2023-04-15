import React from "react";
import "./styles.scss";
import Recipe from "./Recipe";
import * as database from "./../../database";
import { useSelector } from "react-redux";

const Recipes = () => {
  let recipes = useSelector((state) => state.recipe.recipes);

  return (
    <main className="recipes">
      {recipes.map((recipe, index) => {
        // return <Recipe key={index} {...recipe} />;
        return (
          <div key={index}>
            <h2>{recipe.recipeName}</h2>
            <span>{recipe.prepTime}</span>
            <span>{recipe.cookTime}</span>
          </div>
        );
      })}
    </main>
  );
};

export default Recipes;
