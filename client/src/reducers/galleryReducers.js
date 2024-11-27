const initialState = {
  userGallery: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_GALLERY":
    case "SEE_USER_GALLERY":
      return {
        ...state,
        userGallery: action.payload,
      };
    default:
      return state;
  }
};
