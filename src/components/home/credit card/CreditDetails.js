import React from "react";
import classes from "./CreditDetails.module.css";
import Credit from "./Credit";

const CreditDetails = (props) => {
  return (
    <div className={classes.CreditDetails}>
      <Credit
        name={props.name}
        expdate={props.expdate}
        amount={props.amount}
        style={{
          backgroundColor: `${props.background}`,
          color: `${props.color}`,
        }}
      />
      {/*  */}
      <div className={classes.details}>
        <div className={classes.flex}>
          <span>credit limit</span>
          <span className={classes.flexamt}>{props.creditLimit}</span>
        </div>
        <div className={classes.flex}>
          <span>credit used</span>
          <span className={classes.flexamt}>$00.00</span>
        </div>
        <div className={classes.flex}>
          <span>currency</span>
          <span className={classes.flexamt}>USD</span>
        </div>
        <div className={classes.flex}>
          <span>status</span>
          <span className={classes.flexamt}>{props.status}</span>
        </div>
      </div>
    </div>
  );
};

export default CreditDetails;
