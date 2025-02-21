import createSlice from "@reduxjs/toolkit";

// 1
const itemSlice = createSlice({
  name: "item",
  initialState: [
    {
      id: "001",
      image: "images/1.jpg",
      company: "CarltonLondon",
      item_name: "Rhodium-PlatedCZFloralStuds",
      original_price: 1045,
      current_price: 606,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: "10Oct2023",
      rating: { stars: 4.5, count: 1400 },
    },
  ],
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const itemActions = itemSlice.action;

export default itemSlice;
