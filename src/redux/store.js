import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./reducers/useSlice";
import shopsReducer from "./reducers/stores";
import productsReducer from "./reducers/products";

export default configureStore({
  reducer: {
    user: useReducer,
    shops: shopsReducer,
    products: productsReducer,
  },
});