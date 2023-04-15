import React from "react";
import "./styles.scss";
import Recipe from "./Recipe";
import { useSelector } from "react-redux";

const Recipes = () => {
  let recipes = useSelector((state) => state.recipe.recipes);

  return (
    <main className="recipes">
      {recipes.map((recipe, index) => {
        return <Recipe key={index} {...recipe} />;
      })}
    </main>
  );
};

export default Recipes;
