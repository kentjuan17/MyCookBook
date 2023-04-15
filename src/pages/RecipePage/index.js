import React, { useEffect, useState } from "react";
import Recipe from "../../components/Recipes/Recipe";
import * as database from "./../../database";
import { Link, useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";

const RecipePage = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load Recipe from the database
  useEffect(() => {
    (async () => {
      const loadedRecipe = await database.loadById(params.id);
      setRecipe(loadedRecipe);
      setIsLoading(false);
    })();
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!recipe) return <NotFoundPage />;

  return (
    <>
      <h2>{recipe.recipeName}</h2>
      <span>Prep:{recipe.prepTime}</span>
      <span>Cook:{recipe.cookTime}</span>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{`${ingredient.amount} ${ingredient.name}`}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction.instruction}</li>
        ))}
      </ol>
    </>
  );
};

export default RecipePage;
