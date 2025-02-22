import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../store/itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";

//1
const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default myntraStore;
