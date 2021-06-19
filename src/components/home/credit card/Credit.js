import React from "react";
import classes from "./Credit.module.css";

const Credit = (props) => {
  return (
    <div className={classes.Credit} style={props.style}>
      <span>{props.name}</span>
      <span className={classes.end}>
        <i className="fas fa-ellipsis-h"></i>
      </span>

      <span className={classes.amt}>{props.amount}</span>
      <span>{props.expdate}</span>
      <span className={classes.end}>
        <i className="fab fa-cc-mastercard fa-2x"></i>
      </span>
    </div>
  );
};

export default Credit;
