import React from "react";
import classes from "./CreditRow.module.css";

const CreditRow = (props) => {
  return (
    <div className={classes.CreditRow}>
      <div>
        <i className="fas fa-arrow-alt-circle-left"></i>
      </div>
      <span>{props.narr}</span>
      <span className={classes.Creditamt}>{props.amt}</span>
    </div>
  );
};

export default CreditRow;
