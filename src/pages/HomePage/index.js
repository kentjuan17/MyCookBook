import React from "react";
import PageContainer from "../../components/PageContainer";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./styles.scss";

const HomePage = () => {
  const { userData } = useContext(AuthContext);

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
