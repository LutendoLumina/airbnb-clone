const initialState = { openClose: "close", content: "" };

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        openClose: action.payload.openClose,
        content: action.payload.content,
      };
    default:
      return state;
  }
};
