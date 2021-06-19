import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.Header}>
      <h1>welcome back!</h1>
      {/* <div>
        <span>balance:</span>
        <span className={classes.amount}>$234.99</span>
      </div> */}
    </div>
  );
};

export default Header;
