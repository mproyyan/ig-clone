import React from "react";
import Sample from "../../images/sample.png";

function Preview({ postData }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div className="lg:col-span-2 md:col-span-2 lg:w-4/5 md:w-4/5 w-full bg-white lg:ml-8 md:ml-8 shadow-md mb-8">
      <div className="p-2">
        <button className="bg-blue-500 text-white p-2 text-xs uppercase font-semibold rounded-md">
          preview
        </button>
      </div>
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
          <h1 className="text-sm text-gray-900 font-semibold">
            @{user ? user.result.username : "username"}
          </h1>
          <p className="text-xs text-gray-500">
            {user ? user.result.fullName : "Full Name"}
          </p>
        </div>
      </div>
      <div className="max-w-full max-h-120 w-full overflow-hidden bg-cover bg-gray-500">
        <img
          className=""
          src={postData.image ? postData.image : Sample}
          alt=""
        />
      </div>
      <div className="flex px-2 py-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-9 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span className="text-md text-gray-800 font-semibold ml-2">
          X Loves
        </span>
      </div>
      <div className="px-2 flex flex-col">
        <h1 className="text-md text-gray-900 font-semibold mb-1">
          @{user ? user.result.username : "username"}
        </h1>
        <p className="text-md text-gray-600">
          {postData.caption ? postData.caption : "Your caption here"}
        </p>
      </div>
      <div className="flex px-2 py-1">
        {postData.hashtags === "" ? (
          <div className="flex">
            <span className="text-blue-600 mr-1">#hashtag1</span>
            <span className="text-blue-600 mr-1">#hashtag2</span>
            <span className="text-blue-600 mr-1">#hashtag3</span>
          </div>
        ) : (
          postData.hashtags.map((hashtag) => (
            <span className="text-blue-600 mr-1">#{hashtag}</span>
          ))
        )}
      </div>
    </div>
  );
}

export default Preview;
