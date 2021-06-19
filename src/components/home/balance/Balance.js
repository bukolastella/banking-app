import React from "react";
import classes from "./balance.module.css";

const Balance = () => {
  return (
    <div className={classes.Balance}>
      <span className={classes.name}>balance</span>
      <span className={classes.amt}>$234,9034</span>
      <span className={classes.send}>send money</span>
    </div>
  );
};

export default Balance;
