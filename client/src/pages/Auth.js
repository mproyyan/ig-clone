import React, { useState } from "react";
import InputForm from "../components/Input/InputForm";
import { connect } from "react-redux";
import { signup, signin } from "../actions/authAction";
import { useHistory, Redirect } from "react-router-dom";

const initialState = {
  username: "",
  fullName: "",
  password: "",
  confirmPassword: "",
};

function Auth({ signup, signin }) {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState(initialState);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      signup(formData, history);
    }
    signin(formData, history);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switcMode = () => {
    setIsSignup((prevState) => !prevState);
  };

  if (localStorage.getItem("profile")) {
    return <Redirect to="/" />;
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-72 p-3 border-t-8 border-red-400 rounded-t-md shadow-lg">
        <div className="w-full flex justify-center">
          <h1 className="text-2xl mb-3 uppercase font-bold">
            {isSignup ? "Sign Up" : "Sign In"}
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <InputForm
            handleChange={handleChange}
            name="username"
            type="text"
            label="Username"
          />
          {isSignup && (
            <InputForm
              handleChange={handleChange}
              name="fullName"
              type="text"
              label="Full Name"
            />
          )}
          <InputForm
            handleChange={handleChange}
            name="password"
            type="password"
            label="Password"
          />
          {isSignup && (
            <InputForm
              name="confirmPassword"
              handleChange={handleChange}
              type="password"
              label="Confirm Password"
            />
          )}

          <button className="w-full bg-blue-400 text-white uppercase font-semibold rounded-md mt-2 p-1">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <button
          onClick={switcMode}
          className="text-gray-600 font-semibold mt-2 hover:text-black focus:outline-none"
        >
          {isSignup
            ? "You have an account? Sign In"
            : "Dont have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}

export default connect(null, { signup, signin })(Auth);
