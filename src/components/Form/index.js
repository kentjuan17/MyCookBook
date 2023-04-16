import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as database from "./../../database";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../redux/recipeSlice";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [recipeName, setRecipeName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredients, setIngredients] = useState([{}]);
  const [instructions, setInstructions] = useState([
    { step: 1, instruction: "" },
  ]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  const dispatch = useDispatch();

  const handleRecipeNameChange = (e) => {
    setRecipeName(e.target.value);
  };

  const handlePrepTimeChange = (e) => {
    setPrepTime(e.target.value);
  };

  const handleCookTimeChange = (e) => {
    setCookTime(e.target.value);
  };

  // Ingredients
  const handleIngredientChange = (index, name, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][name] = value;
    setIngredients(updatedIngredients);
  };

  const addNewIngredient = () => {
    setIngredients([...ingredients, {}]);
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  // Instructions
  const handleInstructionChange = (index, event) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[index].instruction = event.target.value;
    setInstructions(updatedInstructions);
  };

  const addNewInstruction = () => {
    const newInstruction = { step: instructions.length + 1, instruction: "" };
    setInstructions([...instructions, newInstruction]);
  };

  const removeInstruction = (index) => {
    const updatedInstructions = [...instructions];
    updatedInstructions.splice(index, 1);
    setInstructions(updatedInstructions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add new recipe to firebase and redux
    console.log(recipeName, prepTime, cookTime, ingredients, instructions);

    const userId = currentUser.uid;
    const data = {
      recipeName,
      prepTime,
      cookTime,
      ingredients,
      instructions,
      userId,
    };

    const savedId = await database.save(data);
    if (!savedId) return setErrorMessage("Unable to add recipe to the server");

    data.id = savedId;
    dispatch(addRecipe(data));

    navigate("/recipes");

    // Clear form
    setRecipeName("");
    setPrepTime("");
    setCookTime("");
    setIngredients([{}]);
    setInstructions([{ step: 1, instruction: "" }]);
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <div>
        <label>
          <span>Recipe Name: </span>
          <input
            type="text"
            maxLength={30}
            value={recipeName}
            onChange={handleRecipeNameChange}
            required
          />
        </label>
        <label>
          <span>Prep Time: </span>
          <input
            type="text"
            maxLength={30}
            value={prepTime}
            onChange={handlePrepTimeChange}
          />
        </label>
        <label>
          <span>Cook Time: </span>
          <input
            type="text"
            maxLength={30}
            value={cookTime}
            onChange={handleCookTimeChange}
          />
        </label>

        <h2>Ingredients:</h2>
        {ingredients.map((ingredient, index) => (
          <div key={index} className="input-row">
            <input
              type="text"
              placeholder="Amount"
              value={ingredient.amount || ""}
              onChange={(e) =>
                handleIngredientChange(index, "amount", e.target.value)
              }
              required
            />
            <input
              type="text"
              placeholder="Ingredient name"
              value={ingredient.name || ""}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
              required
            />
            {ingredients.length > 1 && (
              <button onClick={() => removeIngredient(index)}>X</button>
            )}
          </div>
        ))}
        <button onClick={addNewIngredient}>+</button>

        <h2>Instructions:</h2>
        {instructions.map((instruction, index) => (
          <div key={index} className="instruction-row">
            <input
              type="text"
              placeholder={`Step ${index + 1}`}
              value={instruction.instruction}
              onChange={(e) => handleInstructionChange(index, e)}
              required
            />
            {instructions.length > 1 && (
              <button onClick={() => removeInstruction(index)}>X</button>
            )}
          </div>
        ))}

        <button onClick={addNewInstruction}>Add Step</button>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
