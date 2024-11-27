import React from "react";
import { connect } from "react-redux";
import { userSystem } from "../../actions/userAction";
import { useHistory } from "react-router-dom";

function Users({ user, loginUser, userSystem, isSwitchMode }) {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    userSystem(user._id);
    isSwitchMode((state) => !state);
  };

  const seeUserDetail = () => history.push(`/user/${user.username}`);

  return (
    <div className="w-full flex p-2 justify-between">
      <div className="flex">
        {user.profilePic === "" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-14"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          <div className="overflow-hidden rounded-full w-14 h-14">
            <img
              src={user.profilePic}
              className="object-cover w-14 h-14"
              alt=""
            />
          </div>
        )}
        <div className="ml-3">
          <h1
            className="text-gray-800 font-semibold cursor-pointer"
            onClick={seeUserDetail}
          >
            @{user.username}
          </h1>
          <h1 className="text-sm text-gray-500">{user.fullName}</h1>
        </div>
      </div>
      <div className="mr-3">
        <button
          onClick={handleClick}
          className="w-20 h-8 mt-3 justify-center rounded-md bg-blue-400 text-white font-semibold"
        >
          {loginUser?.following?.includes(user._id) ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default connect(null, { userSystem })(Users);
