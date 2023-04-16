import React, { useState } from "react";
import PageContainer from "../../components/PageContainer";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./styles.scss";
import * as database from "./../../database";

const ProfilePage = () => {
  const { userData } = useContext(AuthContext);

  const [name, setName] = useState(userData.displayName);
  const [editMode, setEditMode] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEditButtonClick = () => {
    setEditMode(true);
  };

  const handleSaveButtonClick = async () => {
    const data = { displayName: name, uid: userData.uid };
    const updateUser = await database.updateUserProfile(data);

    if (!updateUser) return console.log("failed updating");

    setEditMode(false);
  };

  return (
    <PageContainer className="profile">
      <h1> My Profile</h1>
      <div className="profile-row">
        <label htmlFor="name">Name:</label>
        {editMode ? (
          <input id="name" value={name} onChange={handleNameChange} />
        ) : (
          <div>{name}</div>
        )}
      </div>
      {editMode ? (
        <button onClick={handleSaveButtonClick}>Save</button>
      ) : (
        <button onClick={handleEditButtonClick}>Edit</button>
      )}
    </PageContainer>
  );
};

export default ProfilePage;
