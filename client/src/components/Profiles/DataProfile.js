import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserLogin } from "../../actions/userAction";

function DataProfile({ userPosts, getUserLogin, userLogin }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  // const userPosts = posts.length;

  const PP = () => {
    return userLogin.profilePic === "" ? (
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
            src={userLogin.profilePic}
            className="object-cover lg:w-40 lg:h-40 md:w-32 md:h-32 w-24 h-24"
            alt=""
          />
        </div>
      </>
    );
  };

  useEffect(() => {
    getUserLogin(user.result._id);
  }, []);
  return (
    <div className="mx-auto lg:w-4/5 md:w-4/5 my-10 flex">
      <PP />
      <div className="lg:ml-20 md:ml-10 ml-8 lg:w-96 md:w-96 w-72">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">@{user?.result?.username}</h1>
          <Link to="/user/setting">
            <svg
              className="lg:w-10 md:w-10 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
          </Link>
        </div>
        <h3 className="text-md text-gray-600 my-2">{user?.result?.fullName}</h3>
        <div className="flex justify-between">
          <span className="lg:text-lg md:text-lg">{userPosts} Kiriman</span>
          <span className="lg:text-lg md:text-lg">
            {userLogin?.followers?.length} Pengikut
          </span>
          <span className="lg:text-lg md:text-lg">
            {userLogin?.following?.length} Diikuti
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userLogin: state.user.users,
});

export default connect(mapStateToProps, { getUserLogin })(DataProfile);
