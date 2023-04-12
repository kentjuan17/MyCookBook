import React from "react";
import "./styles.scss";
import { IoClose } from "react-icons/io5";

const Recipe = ({ id, title, description }) => {
  return (
    <div className="task">
      <button className="close">
        <IoClose />
      </button>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="id">ID: {id}</div>
    </div>
  );
};

export default Recipe;
