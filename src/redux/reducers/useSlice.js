import { createSlice } from "@reduxjs/toolkit";

export const userSlice =  createSlice({
    name:"user",
    initialState: {
        user: null,
        loginError: null,
    },
    reducers:{
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        logout: (state) => {
            state.user = null;
            localStorage.clear();
        },
        loginError: (state, action) => {
          state.loginError = action.payload;
        }
    },
});

export const { login, logout ,loginError } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;

