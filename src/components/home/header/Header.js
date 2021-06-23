import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Header;
