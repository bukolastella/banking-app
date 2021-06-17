import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.screen}>
      <div className={classes.Card}>
        <div className={classes.flex}>
          <div>Sign In</div>
          <div>Sign Up</div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
