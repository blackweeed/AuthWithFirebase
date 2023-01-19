import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { auth } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const signUp = async (e) => {
    // todo sing in
    e.preventDefault();
    try {
      const res = createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder="Enter your nickname"
          onChange={(e) => setUserName(e.target.value)}
        />
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
        <input type="file" />
        <p>
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </p>
        {error ? (
          <span style={{ color: "red" }}>Email already in use</span>
        ) : null}
        {success ? (
          <span style={{ color: "green" }}>Account sucesfully created</span>
        ) : null}
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
