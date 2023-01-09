import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../../Services/Api";
import axios from "axios";

const initialState = {
  shops: [],
  loading: false,
  error: null,
};

const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    getStoresStart(state) {
      state.loading = true;
      state.error = null;
    },
    getStoresSuccess(state, action) {
      state.loading = false;
      state.shops = action.payload;
    },
    getStoresError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getStoresStart, getStoresSuccess, getStoresError } = shopsSlice.actions;

export default shopsSlice.reducer;

const URL = 'http://localhost:8080';

export function fetchShops() {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      dispatch(getStoresStart());
      const response = await axios.get(`${URL}/api/store/`, { headers });
      dispatch(getStoresSuccess(response.data));
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Si le jeton d'authentification n'est pas valide ou s'il n'est pas présent,
        // déconnectez l'utilisateur et affichez un message d'erreur
        dispatch(logout());
        dispatch(getStoresError('Vous devez vous connecter pour accéder à cette page'));
      } else {
        dispatch(getStoresError(error.message));
      }
    }
  };
}