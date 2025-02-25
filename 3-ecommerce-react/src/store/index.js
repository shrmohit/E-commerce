import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "../store/itemsSlice";
import bagSlice from "./bagSlice";

//1
const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
