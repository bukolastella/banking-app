import React from "react";
import classes from "./CreditHead.module.css";

const CreditHead = (props) => {
  const k = props.className + " " + classes.CreditHead;
  const clickHandler = () => {
    props.click(props.id);
  };
  return (
    <div
      className={k}
      style={{
        backgroundColor: `${props.background}`,
        color: `${props.color}`,
      }}
      onClick={clickHandler}
    >
      <span>{props.name}</span>
      <span>{props.amount}</span>
    </div>
  );
};

export default CreditHead;
