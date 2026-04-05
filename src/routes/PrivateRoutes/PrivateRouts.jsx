import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router";
import Loading from "../../pages/Loading";

const PrivateRouts = ({ children }) => {
  const { user, loading } = use(AuthContext);
  console.log(user);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRouts;
