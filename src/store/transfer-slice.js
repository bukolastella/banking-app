import { createSlice } from "@reduxjs/toolkit";

const transferSlice = createSlice({
  name: "transfer",
  initialState: {
    amount: 0,
    date: "",
    narration: "",
    destinatedAccount: "",
    destinatedAccountName: "",
    pinNo: "",
    unique: "",
    movementNode: "",
    myUnique: "",
    myMovementNode: "",
  },
  reducers: {
    storeTransferDetails(state, action) {
      state.amount = action.payload.amount;
      state.narration = action.payload.narration;
      state.date = action.payload.date;
      state.destinatedAccount = action.payload.destinatedAccount;
      state.destinatedAccountName = action.payload.destinatedAccountName;
    },
    savePin(state, action) {
      state.pinNo = action.payload;
    },
    updateUrl(state, action) {
      state.unique = action.payload.unique;
      state.movementNode = action.payload.movementNode;
    },
    updateMyUrl(state, action) {
      state.myUnique = action.payload.myUnique;
      state.myMovementNode = action.payload.myMovementNode;
    },
  },
});

export const transferActions = transferSlice.actions;
export default transferSlice;
