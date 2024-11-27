import React from "react";
import Wrapper from "../components/Users/Wrapper";
import { Redirect } from "react-router-dom";

function User() {
  if (!localStorage.getItem("profile")) {
    return <Redirect to="/auth" />;
  }

  return (
    <div className="lg:px-64 md:px-16 px-3">
      <Wrapper />
    </div>
  );
}

export default User;
