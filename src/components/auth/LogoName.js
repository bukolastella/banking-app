import React from "react";
import classes from "./LogoName.module.css";

const LogoName = () => {
  return (
    <div className={classes.flex}>
      <span>
        <i className="fas fa-piggy-bank fa-2x"></i>
      </span>
      <span>BankSafe</span>
    </div>
  );
};

export default LogoName;
