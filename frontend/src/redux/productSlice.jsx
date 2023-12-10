import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    addCartItem: (state, action) => {
      const total = action.payload.price;
      console.log("Product Slice Add to Cart Action ->", action);
      state.cartItem = [
        ...state.cartItem,
        { ...action.payload, qty: 1, total: total },
      ];
    },
    deleteCartItem: (state, action) => {},
    increaseQty: (state, action) => {
      toast("Item Removed From Cart");
    },
    decreaseQty: (state, action) => {},
  },
});
export const {
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
} = productSlice.actions;
export default productSlice.reducer;
