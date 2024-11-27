import React from "react";

function User({ user, userPosts }) {
  const PP = () => {
    return user?.profilePic === "" ? (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-40"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          />
        </svg>
      </>
    ) : (
      <>
        <div className="overflow-hidden rounded-full lg:w-40 lg:h-40 md:w-32 md:h-32 w-24 h-24">
          <img
            src={user?.profilePic}
            className="object-cover lg:w-40 lg:h-40 md:w-32 md:h-32 w-24 h-24"
            alt=""
          />
        </div>
      </>
    );
  };
  return (
    <div className="mx-auto lg:w-4/5 md:w-4/5 my-10 flex">
      <PP />
      <div className="lg:ml-20 md:ml-10 ml-8 lg:w-96 md:w-96 w-72">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">@{user?.username}</h1>
        </div>
        <h3 className="text-md text-gray-600 my-2">{user?.fullName}</h3>
        <div className="flex justify-between">
          <span className="lg:text-lg md:text-lg">{userPosts} Kiriman</span>
          <span className="lg:text-lg md:text-lg">
            {user?.followers?.length} Pengikut
          </span>
          <span className="lg:text-lg md:text-lg">
            {user?.following?.length} Diikuti
          </span>
        </div>
      </div>
    </div>
  );
}

export default User;
