import React from "react";
import CreditRow from "./CreditRow";
import DebitRow from "./DebitRow";
import classes from "./HistoryRow.module.css";
const HistoryRow = () => {
  return (
    <div>
      <span className={classes.HistoryRow}>Mon,mar 1</span>
      <CreditRow />
      <DebitRow />
    </div>
  );
};

export default HistoryRow;
