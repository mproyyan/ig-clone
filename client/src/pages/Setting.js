import React from "react";
import UserSetting from "../components/Setting/UserSetting";
import { Redirect } from "react-router-dom";

function Setting() {
  if (!localStorage.getItem("profile")) {
    return <Redirect to="/auth" />;
  }

  return (
    <>
      <UserSetting />
    </>
  );
}

export default Setting;
