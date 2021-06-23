import React from "react";
import classes from "./ConfirmRow.module.css";

const ConfirmRow = (props) => {
  return (
    <div className={classes.flex}>
      <span>{props.label}</span>
      <span>{props.value}</span>
    </div>
  );
};

export default ConfirmRow;
