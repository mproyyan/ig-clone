import React, { useState } from "react";
import Form from "../components/Uploads/Form";
import Preview from "../components/Uploads/Preview";
import { Redirect } from "react-router-dom";

function Upload() {
  const [postData, setPostData] = useState({
    caption: "",
    hashtags: "",
    image: "",
  });

  if (!localStorage.getItem("profile")) {
    return <Redirect to="/auth" />;
  }

  return (
    <div className="lg:px-64 md:px-36 px-12 w-full">
      <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 mt-10 flex flex-col">
        <Form postData={postData} setPostData={setPostData} />
        <Preview postData={postData} />
      </div>
    </div>
  );
}

export default Upload;
