import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
    removeRecipe: (state, action) => {
      const id = action.payload;
      const filteredTasks = state.recipes.filter((recipe) => recipe.id !== id);
      state.recipes = filteredTasks;
    },
  },
});

export const { setRecipes, addRecipe, removeRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
