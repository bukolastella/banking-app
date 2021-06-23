import React from "react";
import classes from "./MenuRow.module.css";
import { NavLink } from "react-router-dom";

const MenuRow = (props) => {
  const result = props.path ? (
    <NavLink
      to={props.path}
      activeClassName={classes.active}
      className={classes.MenuRow}
    >
      {props.children}
    </NavLink>
  ) : (
    <span className={classes.MenuRow}>{props.children}</span>
  );
  return result;
};

export default MenuRow;
