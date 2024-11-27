import React, { useEffect, useState } from "react";
import { getUsers } from "../../actions/userAction";
import { connect } from "react-redux";
import Users from "./Users";

function Wrapper({ getUsers, dataUsers }) {
  const [switchMode, isSwitchMode] = useState(true);

  const userId = JSON.parse(localStorage.getItem("profile")).result._id;
  const dummy = dataUsers.filter(
    (activeUser) => String(activeUser._id) === String(userId)
  );
  const loginUser = dummy[0];
  const users = dataUsers.filter(
    (activeUser) => String(activeUser._id) !== String(userId)
  );

  useEffect(() => {
    getUsers();
  }, [switchMode]);
  return (
    <div className="mx-auto w-3/5 bg-white shadow-md mt-8 rounded-md">
      {users.map((user) => (
        <Users user={user} loginUser={loginUser} isSwitchMode={isSwitchMode} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  dataUsers: state.dataUsers.dataUsers,
});

export default connect(mapStateToProps, { getUsers })(Wrapper);
