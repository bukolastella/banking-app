import React from "react";
import classes from "./CreditRow.module.css";

const CreditRow = () => {
  return (
    <div className={classes.CreditRow}>
      <div>
        <i className="fas fa-arrow-alt-circle-left"></i>
      </div>
      <span>recieve salary</span>
      <span className={classes.Creditamt}>$12,000.22</span>
    </div>
  );
};

export default CreditRow;
