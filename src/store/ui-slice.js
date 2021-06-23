import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    logout: false,
    showSendModal: false,
    token: localStorage.getItem("token"),
    // email: "",
  },
  reducers: {
    logout(state) {
      state.logout = !state.logout;
    },
    showSendModalHandler(state, action) {
      state.showSendModal = action.payload;
    },
    loginHandler(state, action) {
      state.token = action.payload.idToken;
      localStorage.setItem("token", action.payload.idToken);
      localStorage.setItem("deadLine", action.payload.expirationTime);
      localStorage.setItem("email", action.payload.email);
    },
    logoutHandler(state) {
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("deadLine");
      localStorage.removeItem("email");
    },
    // emailHandler(state, action) {
    //   state.email = action.payload;
    // },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
