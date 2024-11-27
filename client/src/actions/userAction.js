import axios from "axios";

export const editProfile = (id, updated) => (dispatch) => {
  axios.patch(`/user/${id}/setting`, updated).then((res) => {
    dispatch({ type: "EDIT", payload: res.data });
  });
};

export const getUsers = () => (dispatch) => {
  axios.get("/user/get-users").then((res) => {
    dispatch({ type: "GET_USERS", payload: res.data });
  });
};

export const userSystem = (id) => (dispatch) => {
  axios.post(`/user/${id}/follow`).then((res) => {
    dispatch({ type: "FOLLOW_UNFOLLOW_USER", payload: res.data });
  });
};

export const getUserLogin = (id) => (dispatch) => {
  axios.get(`/user/${id}/userLogin`).then((res) => {
    dispatch({ type: "GET_USER_LOGIN", payload: res.data });
  });
};

export const visitUser = (username) => (dispatch) => {
  axios.get(`/user/${username}`).then((res) => {
    const data = res.data[0];

    dispatch({ type: "VISIT_USER", payload: res.data });
  });
};
