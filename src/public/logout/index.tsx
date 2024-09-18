import React from "react";
import { Navigate } from "react-router-dom";

export default () => {
  console.log("logout?");
  window.localStorage.removeItem("profile");
  window.localStorage.removeItem("role");

  return <Navigate to="/" />;
};
