import React, { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const [state, setstate] = useState("");
  const setClasses = props.className + " " + classes.input;
  console.log(state);
  return (
    <div className={setClasses}>
      <input
        type={props.type}
        required
        onChange={(event) => setstate(event.target.value)}
        value={state}
      />
      <label>{props.label}</label>
    </div>
  );
};

export default Input;
