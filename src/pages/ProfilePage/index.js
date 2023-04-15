import React from "react";
import PageContainer from "../../components/PageContainer";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./styles.scss";

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <PageContainer title="My Profile" className="profile-component">
      <h2>Name: {currentUser.displayName}</h2>
      <p>Email: {currentUser.email}</p>
    </PageContainer>
  );
};

export default ProfilePage;
