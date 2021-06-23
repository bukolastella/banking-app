import React from "react";
import classes from "./balance.module.css";
import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => state.bank.balance);
  return (
    <div className={classes.Balance}>
      <span className={classes.name}>balance</span>
      <span className={classes.amt}>{`$${balance.toLocaleString()}`}</span>
    </div>
  );
};

export default Balance;
