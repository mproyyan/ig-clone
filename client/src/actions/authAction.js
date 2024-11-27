import axios from "axios";

export const signup = (formData, history) => (dispatch) => {
  axios
    .post("/user/signup", formData)
    .then((res) => {
      const { data } = res;
      dispatch({ type: "AUTH", data });
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signin = (formData, history) => (dispatch) => {
  axios
    .post("/user/signin", formData)
    .then((res) => {
      const { data } = res;
      dispatch({ type: "AUTH", data });
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
