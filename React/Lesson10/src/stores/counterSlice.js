import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    products: [],
  },
  reducers: {
    sayiArtir: (state, action) => {
      console.log({ state, action });
      state.value += action.payload || 1;
    },
    sayiAzalt: (state) => {
      state.value -= 1;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { sayiArtir, sayiAzalt } = counterSlice.actions;
