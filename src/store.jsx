import { configureStore } from "@reduxjs/toolkit";
import { listingListReducer } from "../src/reducers/listingReducers";
import { modalReducer } from "../src/reducers/modalReducer";

const store = configureStore({
  reducer: { listingList: listingListReducer, modal: modalReducer },
});

export default store;
