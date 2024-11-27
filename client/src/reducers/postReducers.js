const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        posts: action.payload,
      };
    case "UPLOAD":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "LOVE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};
