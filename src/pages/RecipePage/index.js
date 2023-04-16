import React, { useEffect, useState } from "react";
import * as database from "./../../database";
import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import "./styles.scss";
import PageContainer from "../../components/PageContainer";
import { useDispatch } from "react-redux";
import { removeRecipe } from "../../redux/recipeSlice";

const RecipePage = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

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

  const handleDeleteRecipe = async (e) => {
    e.preventDefault();
    console.log(recipe);

    const removed = await database.remove(params.id);
    if (!removed) return alert("Failed to delete recipe!");

    if (removed) return alert("Recipe deleted!");
    dispatch(removeRecipe(params.id));
  };

  return (
    <PageContainer
      title={recipe.recipeName + " Recipe"}
      className="recipe-page-container"
    >
      <div className="recipe-page-total-time">
        <span>
          <strong>Prep:</strong> {recipe.prepTime}
        </span>
        <span>
          <strong>Cook:</strong> {recipe.cookTime}
        </span>
      </div>

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

      <button onClick={handleDeleteRecipe}>Delete Recipe</button>
    </PageContainer>
  );
};

export default RecipePage;
