import React from "react";
import classes from "./Card.module.css";
import { NavLink } from "react-router-dom";
import LogoName from "./LogoName";

const Card = (props) => {
  return (
    <div className={classes.screen}>
      <div className={classes.Card}>
        <LogoName />
        <div className={classes.flex}>
          <NavLink
            activeClassName={classes.active}
            className={classes.flexdiv}
            to="/auth"
          >
            Sign In
          </NavLink>
          <NavLink
            activeClassName={classes.active}
            className={classes.flexdiv}
            to="/register"
          >
            Sign Up
          </NavLink>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
