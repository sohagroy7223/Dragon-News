import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const SignUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    SignUpUser,
  };

  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
