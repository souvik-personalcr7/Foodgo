
import { createSlice } from "@reduxjs/toolkit";

const ownerSlice = createSlice({
  name: "owner",
  initialState: {
    shopData: null,
    
  },
  reducers: {
    setMyShopData: (state, action) => {
      state.userData = action.payload;
    },
    setCity: (state, action) => {
      state.myShopData = action.payload;
    },
  },
});

export const { setMyShopData } = ownerSlice.actions;
export default ownerSlice.reducer;
