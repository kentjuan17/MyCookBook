import React from "react";
import PageContainer from "../../components/PageContainer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { setRecipes } from "../../redux/recipeSlice";
import "./styles.scss";
import * as database from "./../../database";

const HomePage = () => {
  const { userData } = useContext(AuthContext);

  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      // IIFE
      (async () => {
        // Loads the recipes from Firestore
        const data = await database.load(currentUser.uid);
        dispatch(setRecipes(data));
        console.log("Loaded db:", data);
      })();
    }
  }, [currentUser, dispatch]);

  return (
    <PageContainer
      title={`Welcome ${userData.displayName}!` || "Welcome"}
      className="home-page-container"
    >
      <p>Let's get started on your next culinary adventure.</p>
    </PageContainer>
  );
};

export default HomePage;
