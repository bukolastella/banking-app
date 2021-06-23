import React from "react";
import classes from "./DebitRow.module.css";

const DebitRow = (props) => {
  return (
    <div className={classes.DebitRow}>
      <div>
        <i className="far fa-arrow-alt-circle-right"></i>
      </div>
      <span>{props.narr}</span>
      <span className={classes.Debitamt}>{props.amt}</span>
    </div>
  );
};

export default DebitRow;
