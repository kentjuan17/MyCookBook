import React from "react";
import Recipes from "../../components/Recipes";
import PageContainer from "../../components/PageContainer";

const HomePage = () => {
  return (
    <PageContainer title="Recipes">
      <Recipes />
    </PageContainer>
  );
};

export default HomePage;
