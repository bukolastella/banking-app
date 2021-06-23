import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
  name: "bank",
  initialState: {
    balance: 0,
    date: [],
    posAmount: 0,
    negAmount: 0,
    tranData: [],
    sortData: [],
    name: "",
    myNo: "",
  },
  reducers: {
    saveBalance(state, action) {
      state.balance = action.payload;
    },
    saveDateToData(state, action) {
      state.date = action.payload.date;
      state.posAmount = action.payload.dateToPosAmount;
      state.negAmount = action.payload.dateToNegAmount;
    },
    saveTranData(state, action) {
      state.tranData = action.payload;
    },
    saveSortData(state, action) {
      state.sortData = action.payload;
    },
    saveName(state, action) {
      state.name = action.payload;
    },
    saveMyNo(state, action) {
      state.myNo = action.payload;
    },
  },
});
export const bankAction = bankSlice.actions;
export default bankSlice;
