import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import bankSlice from "./bank-slice";
import transferSlice from "./transfer-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    bank: bankSlice.reducer,
    transfer: transferSlice.reducer,
  },
});
export default store;
