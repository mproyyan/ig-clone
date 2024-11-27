const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_LOGIN":
    case "VISIT_USER":
    case "FOLLOW_UNFOLLOW_USER":
      return {
        ...state,
        users: action.payload,
      };
    case "EDIT":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

module.exports = userReducer;
