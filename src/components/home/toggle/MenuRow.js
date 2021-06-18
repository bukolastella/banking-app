import React from "react";
import classes from "./MenuRow.module.css";

const MenuRow = (props) => {
  return <div className={classes.MenuRow}>{props.children}</div>;
};

export default MenuRow;
