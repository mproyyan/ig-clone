import React from "react";
import { connect } from "react-redux";
import { lovePost } from "../../actions/postActions";
import { useHistory } from "react-router-dom";

function Content({
  img,
  hashtags,
  loves,
  caption,
  fullName,
  username,
  lovePost,
  id,
}) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  const LoveIcon = () => {
    return loves.find((loved) => loved === user?.result?._id) ? (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-9 cursor-pointer text-red-500"
          onClick={() => lovePost(id)}
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
      </>
    ) : (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-9 cursor-pointer"
          onClick={() => lovePost(id)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </>
    );
  };

  const seeUserDetail = (username) => {
    const usernameUserLogin = user?.result?.username;
    if (username === usernameUserLogin) {
      history.push("/profile");
    } else {
      history.push(`/user/${username}`);
    }
  };

  return (
    <div className="w-full py-4 px-8 lg:px-64 md:px-44">
      <div className="bg-white lg:w-3/5 md:w-3/5 w-full shadow-md mb-4">
        <div className="flex p-2">
          <svg
            className="w-11"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="ml-3">
            <h1
              className="text-sm text-gray-900 font-semibold cursor-pointer"
              onClick={() => seeUserDetail(username)}
            >
              @{username}
            </h1>
            <p className="text-xs text-gray-500">{fullName}</p>
          </div>
        </div>
        <div className="max-w-full max-h-120 w-full overflow-hidden bg-cover">
          <img className="" src={img} alt="" />
        </div>
        <div className="flex px-2 py-1 items-center">
          <LoveIcon />
          <span className="text-md text-gray-800 font-semibold ml-2">
            {loves.length} Loves
          </span>
        </div>
        <div className="px-2 flex flex-col">
          <h1 className="text-md text-gray-900 font-semibold mb-1">
            @{username}
          </h1>
          <p className="text-md text-gray-600">{caption}</p>
        </div>
        <div className="flex px-2 py-1">
          {hashtags.map((hashtag) => (
            <span className="text-blue-600 mr-1">#{hashtag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default connect(null, { lovePost })(Content);
