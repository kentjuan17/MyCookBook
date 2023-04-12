import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../database/config";

const RegisterPage = () => {
  const [error, setError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(e);

    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    //Start of form validation

    setNameError(userName === "");
    setEmailError(email === "");

    let passwordErrorMsg = "";
    if (!password) {
      passwordErrorMsg = "Please enter a password";
    } else if (password.length < 6) {
      passwordErrorMsg = "Passwords should have a minimum of 6 characters";
    }

    setPasswordError(passwordErrorMsg);

    if (userName === "" || email === "") {
      return;
    }

    //End of form validation
    try {
      // registration
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(res.user, {
        displayName: userName,
      });

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        userName,
        email,
      });

      // navigate to register
      navigate("/login");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <div className="form-row">
        <div className="form-container register-form">
          <div className="form-wrapper">
            <h1 className="logo-responsive">My Cook Book</h1>
            <span className="title">Sign Up</span>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setNameError(false);
                }}
              />{" "}
              {nameError && (
                <span style={{ color: "#E74C3C", fontSize: 12, marginTop: -5 }}>
                  Name is required
                </span>
              )}
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmailError(false);
                }}
              />{" "}
              {emailError && (
                <span style={{ color: "#E74C3C", fontSize: 12, marginTop: -5 }}>
                  Email is required
                </span>
              )}
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPasswordError("")}
              />
              {passwordError && (
                <span style={{ color: "#E74C3C", fontSize: 12, marginTop: -5 }}>
                  {passwordError}
                </span>
              )}
              <button>Sign Up</button>
              {error && <span>Something went wrong</span>}
            </form>
            <p>
              Already have an account? Login <Link to="/login">here</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
