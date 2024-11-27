const initialState = {
  dataUsers: [],
};

const dataUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        dataUsers: action.payload,
      };
    default:
      return state;
  }
};

module.exports = dataUsersReducer;
