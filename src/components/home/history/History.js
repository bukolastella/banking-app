import React from "react";
import HistoryRow from "./HistoryRow";
import classes from "./History.module.css";

const History = () => {
  return (
    <div className={classes.History}>
      <h1>latest transactions</h1>
      <HistoryRow />
    </div>
  );
};

export default History;
