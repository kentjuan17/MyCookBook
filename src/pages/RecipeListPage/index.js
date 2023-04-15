import React from "react";
import PageContainer from "../../components/PageContainer";
import Recipes from "../../components/Recipes";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const RecipeListPage = () => {
  const navigate = useNavigate();

  const handleAddRecipeClick = () => {
    navigate("/recipes/add");
  };
  return (
    <PageContainer title="My Recipes">
      <Recipes />

      <div className="add-recipe-container">
        <button className="add-recipe-button" onClick={handleAddRecipeClick}>
          Add Recipe
        </button>
      </div>
    </PageContainer>
  );
};

export default RecipeListPage;
