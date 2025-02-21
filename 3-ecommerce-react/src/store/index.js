import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";

//1
const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
  },
});

export default myntraStore;
