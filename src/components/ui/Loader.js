import React from "react";
import classes from "./Loader.module.css";

const Loader = (props) => {
  const k =
    props.color === true
      ? classes.color + " " + classes["lds-ring"]
      : classes["lds-ring"];
  return (
    <div className={k}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
