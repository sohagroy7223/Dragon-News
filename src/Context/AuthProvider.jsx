import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(loading, user);

  const SignUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const SignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (updatadata) => {
    return updateProfile(auth.currentUser, updatadata);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const sendEmailVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // Login with google
  const provider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const userInfo = {
    loading,
    user,
    setUser,
    loginWithGoogle,
    sendEmailVerify,
    resetPassword,
    updateUser,
    SignUpUser,
    SignInUser,
    SignOut,
  };

  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
