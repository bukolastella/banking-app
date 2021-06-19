import React from "react";
import classes from "./DebitRow.module.css";

const DebitRow = () => {
  return (
    <div className={classes.DebitRow}>
      <div>
        <i className="far fa-arrow-alt-circle-right"></i>
      </div>
      <span>payment to nick</span>
      <span className={classes.Debitamt}>$576.22</span>
    </div>
  );
};

export default DebitRow;
