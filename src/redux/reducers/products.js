import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../../Services/Api";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getProductsSuccess(state, action) {
      state.loading = false;
      state.shops = action.payload;
    },
    getProductsError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductsStart, getProductsSuccess, getProductsError } = productsSlice.actions;

export default productsSlice.reducer;

export function fetchProducts() {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      dispatch(getProductsStart());
      const response = await axios.get(`${URL}/api/product/`, { headers });
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Si le jeton d'authentification n'est pas valide ou s'il n'est pas présent,
        // déconnectez l'utilisateur et affichez un message d'erreur
        dispatch(logout());
        dispatch(getProductsError('Vous devez vous connecter pour accéder à cette page'));
      } else {
        dispatch(getProductsError(error.message));
      }
    }
  };
}