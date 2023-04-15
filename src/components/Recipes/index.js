import React from "react";
import "./styles.scss";
import Recipe from "./Recipe";

const Recipes = () => {
  let recipes = [
    {
      id: 1,
      name: "My First Recipe",
      ingredients: [
        "1 onion",
        "2 cloves of garlic",
        "1 tablespoon of salt",
        "pinch of pepper",
      ],
      instructions: "Lorem Ipsum",
      cooking_time: "30 minutes",
    },
    {
      id: 2,
      name: "My Second Recipe",
      ingredients: [
        "1 onion",
        "2 cloves of garlic",
        "1 tablespoon of salt",
        "pinch of pepper",
      ],
      instructions: "Lorem Ipsum",
      cooking_time: "30 minutes",
    },
    {
      id: 3,
      name: "My Third Recipe",
      ingredients: [
        "1 onion",
        "2 cloves of garlic",
        "1 tablespoon of salt",
        "pinch of pepper",
      ],
      instructions: "Lorem Ipsum",
      cooking_time: "30 minutes",
    },
    {
      id: 4,
      name: "My Fourth Recipe",
      ingredients: [
        "1 onion",
        "2 cloves of garlic",
        "1 tablespoon of salt",
        "pinch of pepper",
      ],
      instructions: "Lorem Ipsum",
      cooking_time: "30 minutes",
    },
  ];

  return (
    <main className="recipes">
      {recipes.map((recipe, index) => {
        return <Recipe key={index} {...recipe} />;
      })}
    </main>
  );
};

export default Recipes;
