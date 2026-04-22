import { configureStore } from "@reduxjs/toolkit";
import { listingListReducer } from "../src/reducers/listingReducers";
import { modalReducer } from "../src/reducers/modalReducer";
import { userLoginReducer } from "./reducers/userReducer";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const preloadedState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const store = configureStore({
  reducer: {
    listingList: listingListReducer,
    modal: modalReducer,
    userLogin: userLoginReducer,
  },
  preloadedState: preloadedState,
});

export default store;
