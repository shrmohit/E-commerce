import { createSlice } from "@reduxjs/toolkit";

// 1
const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      console.log(action.payload);

      return [...action.payload];
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice;
