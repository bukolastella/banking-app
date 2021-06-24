import React, { useState } from "react";
import ConfirmRow from "./ConfirmRow";
import classes from "./ConfirmMoney.module.css";
import { useSelector } from "react-redux";
import Loader from "../ui/Loader";
import { useHistory } from "react-router";

const ConfirmMoney = (props) => {
  const history = useHistory();
  const confirmState = useSelector((state) => state.transfer);
  const balance = useSelector((state) => state.bank.balance);
  const [pinState, setPinState] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reveal, setReveal] = useState("confirm");
  const icon = <i className="far fa-check-circle fa-2x"></i>;
  const finalHandler = async (event) => {
    event.preventDefault();
    if (pinState !== confirmState.pinNo || pinState.trim().length === 0) {
      setError(true);
      setPinState("");
      return;
    }
    const deposit = {
      amount: Number("-" + confirmState.amount),
      narration: confirmState.narration,
      date: confirmState.date,
    };
    const credit = {
      amount: Number(confirmState.amount),
      narration: confirmState.narration,
      date: confirmState.date,
    };
    console.log(confirmState.date);
    console.log(new Date(confirmState.date));
    setLoading(true);
    fetch(
      `https://banking-app-7dc7f-default-rtdb.firebaseio.com/users/${confirmState.unique}/movements/${confirmState.movementNode}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(credit),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    fetch(
      `https://banking-app-7dc7f-default-rtdb.firebaseio.com/users/${confirmState.myUnique}/movements/${confirmState.myMovementNode}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(deposit),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setLoading(false);
    setReveal(icon);
    setTimeout(() => {
      history.go(0);
    }, 1000);
  };

  return (
    <div className={classes.SendMoney}>
      <span className={classes.Close} onClick={props.click}>
        <i className="fas fa-times fa-2x"></i>
      </span>
      <h3>Confirm Transfer</h3>
      <ConfirmRow
        label="from"
        value={`Universal $${balance.toLocaleString()}`}
      />
      <ConfirmRow
        label="to"
        value={`${confirmState.destinatedAccountName} ${confirmState.destinatedAccount}`}
      />
      <ConfirmRow label="bank" value="Bank Safe" />
      <ConfirmRow label="Date" value={`${confirmState.date}`} />
      <ConfirmRow label="amount" value={`${confirmState.amount}`} />
      <ConfirmRow label="narration" value={`${confirmState.narration}`} />
      <form className={classes.pin} onSubmit={finalHandler}>
        <div className={classes.color}>
          <div>enter account PIN to confirm your transfer</div>
          <input
            style={{
              border: error ? "1px solid red" : null,
            }}
            type="password"
            value={pinState}
            onChange={(event) => setPinState(event.target.value)}
          />
        </div>
        <button type="submit" className={classes.btn}>
          {!loading && reveal}
          {loading && <Loader />}
        </button>
      </form>
    </div>
  );
};

export default ConfirmMoney;
