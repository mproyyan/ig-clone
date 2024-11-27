import React, { useEffect } from "react";
import { connect } from "react-redux";
import { uploadPost } from "../../actions/postActions";
import FileBase from "react-file-base64";
import { useHistory } from "react-router-dom";

function Form({ uploadPost, postData, setPostData }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadPost(
      {
        ...postData,
        username: user?.result?.username,
        fullName: user?.result?.fullName,
      },
      history
    );
    clear();
  };

  const clear = () => {
    setPostData({
      caption: "",
      hashtags: "",
      image: "",
    });
  };

  useEffect(() => {});
  return (
    <div className="lg:col-span-1 md:col-span-1 bg-white p-6 shadow-md border-t-8 border-red-400 rounded-tl-md rounded-tr-md h-80 mb-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="caption" className="block font-semibold mt-1">
          Caption
        </label>
        <textarea
          name="caption"
          cols="10"
          placeholder="Your caption here"
          value={postData.caption}
          className="border border-gray-200 w-full rounded-md my-2 focus:outline-none hover:outline-none focus:ring-red-300 focus:ring-1 p-2 resize-none"
          onChange={(e) =>
            setPostData({ ...postData, caption: e.target.value })
          }
        />
        <label htmlFor="hashtags" className="block font-semibold mt-1">
          Hashtags
        </label>
        <input
          type="text"
          name="hashtags"
          value={postData.hashtags}
          placeholder="Separate by comma, ex : art,cool,beautiful"
          className="border border-gray-200 w-full rounded-md h-8 my-2 focus:outline-none hover:outline-none focus:ring-red-300 focus:ring-1 p-2"
          onChange={(e) =>
            setPostData({ ...postData, hashtags: e.target.value.split(",") })
          }
        />
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => {
            setPostData({ ...postData, image: base64 });
          }}
        />
        <button
          type="submit"
          className="w-full bg-red-400 font-semibold rounded-md p-1 mt-5 flex justify-center"
        >
          <h1 className="text-md font-semibold text-gray-700">POST</h1>
        </button>
      </form>
    </div>
  );
}

export default connect(null, { uploadPost })(Form);
