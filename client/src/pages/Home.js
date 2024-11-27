import React from "react";
import ContentWrapper from "../components/Content/ContentWrapper";
import { Redirect } from "react-router-dom";

function Home() {
  const user = JSON.parse(localStorage.getItem("profile"));

  if (!user) {
    return <Redirect to="/auth" />;
  }

  return (
    <>
      <ContentWrapper />
    </>
  );
}

export default Home;
