import React from "react";
import classes from "./balance.module.css";
import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => state.bank.balance);
  const accountNo = useSelector((state) => state.bank.myNo);
  return (
    <div className={classes.Balance}>
      <span className={classes.name}>balance</span>
      <span className={classes.amt}>{`$${balance.toLocaleString()}`}</span>
      <span className={classes.No}>account-no</span>
      <span className={classes.NoAmt}>{accountNo}</span>
    </div>
  );
};

export default Balance;
