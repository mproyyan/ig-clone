import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { editProfile } from "../../actions/userAction";

function UserSetting({ editProfile }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [userEdit, setUserEdit] = useState({
    profilePic: "",
  });

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/auth");
    setUser(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProfile(user.result._id, userEdit);
  };

  const PP = () => {
    return userEdit.profilePic === "" ? (
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
        <div className="bg-blue-400 w-36 h-36 rounded-full overflow-hidden">
          <img
            src={userEdit.profilePic}
            className="object-cover w-36 h-36"
            alt=""
          />
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-3 w-96 border-t-8 border-red-400 rounded-t-md shadow-lg">
        <div className="flex justify-center items-center">
          <PP />
        </div>
        <form onSubmit={handleSubmit}>
          <FileBase
            className="my-2"
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setUserEdit({ ...userEdit, profilePic: base64 });
            }}
          />
          <input
            type="text"
            id="username"
            name="username"
            disabled
            value={user?.result?.username}
            className="border border-gray-200 w-full rounded-md h-8 my-2 focus:outline-none hover:outline-none focus:ring-red-300 focus:ring-1 p-2"
          />
          <input
            type="text"
            id="fullName"
            name="fullName"
            disabled
            value={user?.result?.fullName}
            className="border border-gray-200 w-full rounded-md h-8 my-2 focus:outline-none hover:outline-none focus:ring-red-300 focus:ring-1 p-2"
          />
          <button
            onClick={logout}
            className="w-full bg-red-400 font-semibold rounded-md p-1 mt-5 flex justify-center"
          >
            <h1 className="text-md font-semibold text-gray-700">LOG OUT</h1>
          </button>
          <button
            type="submit"
            className="w-full bg-blue-400 font-semibold rounded-md p-1 mt-1 flex justify-center"
          >
            <h1 className="text-md font-semibold text-white">SAVE</h1>
          </button>
        </form>
      </div>
    </div>
  );
}

export default connect(null, { editProfile })(UserSetting);
