import React, { useState } from "react";
import "./Styles/signin.css";
import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";

const SignIn = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "LoginDetails"), {
        Name,
        Email,
        Password,
      });
      alert("data submitted");
      console.log("Submitted values:", { Name, Email, Password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bodyCon">
        <div className="mainCon">
          <div className="signInContainer">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                className="label"
                type="text"
                value={Name}
                onChange={handleNameChange}
              />
              <label htmlFor="email">Email address</label>
              <input
                className="label"
                type="text"
                value={Email}
                onChange={handleEmailChange}
              />
              <label htmlFor="password">Password</label>
              <input
                className="label"
                type="password"
                value={Password}
                onChange={handlePasswordChange}
              />
              <a href="/" className="anchor">
                Forgot Password?
              </a>
              <button className="butt" type="submit">
                Sign In
              </button>
            </form>

            <hr className="hr" />

            <button className="googlebutt">Sign in with Google</button>
            <p>
              Don't have an account yet?{" "}
              <a href="/" className="anchor">
                Get started
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
