import PageContainer from "../../components/PageContainer";
import Form from "../../components/Form";
import React from "react";
import "./styles.scss";

const AddRecipePage = () => {
  return (
    <PageContainer title="Add New Recipe" className="add-recipe-page-container">
      <Form />
    </PageContainer>
  );
};

export default AddRecipePage;
