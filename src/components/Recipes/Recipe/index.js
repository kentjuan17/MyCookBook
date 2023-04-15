import React from "react";
import "./styles.scss";
import { IoClose } from "react-icons/io5";

const Recipe = ({ name, ingredients, instructions, cooking_time }) => {
  return (
    <div className="task">
      <button className="close">
        <IoClose />
      </button>
      <div className="title">{name}</div>
      <div className="ingredients">{ingredients}</div>
      <div className="instructions">{instructions}</div>
      <div className="cooking-time">ID: {cooking_time}</div>
    </div>
  );
};

export default Recipe;
