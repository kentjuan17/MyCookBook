import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../database/config";
import "./styles.scss";

const LoginPage = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!userCredential.user) {
        setError("Please verify your email before signing in.");
        return;
      }

      // navigate to home page
      navigate("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.log(err);
    }
  };

  return (
    <>
      <div className="form-row">
        <div className="form-container register-form">
          <div className="form-wrapper">
            <h1 className="logo-responsive">My Cook Book</h1>
            <span className="title">Sign In</span>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Sign In</button>
              {error && (
                <span
                  style={{
                    color: "#E74C3C",
                    fontSize: 12,
                    marginTop: -5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {error}
                </span>
              )}
            </form>
            <p>
              Don't have an account yet? Register{" "}
              <Link to="/register">here</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
