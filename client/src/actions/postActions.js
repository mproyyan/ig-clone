import axios from "axios";

axios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getPosts = () => (dispatch) => {
  axios
    .get("/home")
    .then((res) => {
      dispatch({ type: "FETCH_ALL", payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const seeUserGallery = (username) => (dispatch) => {
  axios
    .get(`/gallery/${username}`)
    .then((res) => {
      dispatch({ type: "SEE_USER_GALLERY", payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const uploadPost = (newPost, history) => (dispatch) => {
  axios
    .post("/upload", newPost)
    .then((res) => {
      dispatch({ type: "UPLOAD", payload: res.data });
      history.push("/");
    })
    .catch((err) => console.log(err));
};

export const lovePost = (id) => (dispatch) => {
  axios
    .patch(`/${id}/lovePost`)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: "LOVE_POST", payload: res.data });
    })
    .catch((err) => console.log(err));
};
