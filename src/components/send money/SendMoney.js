import React, { useState } from "react";
import classes from "./SendMoney.module.css";
import ConfirmMoney from "./ConfirmMoney";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { transferActions } from "../../store/transfer-slice";
import Loader from "../ui/Loader";
const SendMoney = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.bank.balance);
  const myNo = useSelector((state) => state.bank.myNo);
  const [accountNo, setAccountNo] = useState("");
  const [desNo, setDesNo] = useState("");
  const [narr, setNarr] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState("");
  const [nextPage, setNextPage] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    if (narr.trim().length === 0) {
      setNarr("");
      return;
    }
    if (balance - Number(amount) <= 0 || Number(amount) === 0) {
      setAmount(0);
      return;
    }
    if (accountNo.trim().length === 0) {
      setAccountNo("");
      setLoading(false);
      setVisible(false);
      return;
    }
    dispatch(
      transferActions.storeTransferDetails({
        narration: narr,
        amount: amount,
        destinatedAccount: accountNo,
        destinatedAccountName: desNo,
        date: new Date().toLocaleDateString(),
      })
    );
    setNextPage(true);
  };
  const closeHandler = () => {
    dispatch(uiActions.showSendModalHandler(false));
  };
  const narrBlurHandler = () => {
    if (narr.trim().length === 0) {
      setNarr("");
      return;
    }
  };
  const accountNoHandler = async () => {
    setLoading(true);
    if (accountNo.trim().length === 0) {
      setAccountNo("");
      setLoading(false);
      setVisible(false);
      return;
    }
    if (myNo === accountNo) {
      console.log("sj");
      setLoading(false);
      setError(true);
      setVisible(true);
      return;
    }
    setError(false);
    const response = await fetch(
      `https://banking-app-7dc7f-default-rtdb.firebaseio.com/users.json?orderBy="accountNo"&equalTo="${accountNo}"&print=pretty`
    );
    const data = await response.json();

    for (const key in data) {
      dispatch(
        transferActions.updateUrl({
          unique: key,
          movementNode: data[key].movements.length,
        })
      );
      setDesNo(data[key].name);
      setVisible(true);
    }
    setLoading(false);
  };
  return (
    <div className={classes.gray}>
      {!nextPage && (
        <div className={classes.chill}>
          {loading && <Loader color={true} />}
          {!loading && (
            <div className={classes.SendMoney}>
              <span className={classes.Close} onClick={closeHandler}>
                <i className="fas fa-times fa-2x"></i>
              </span>
              <h3>Send Money Details</h3>
              <form onSubmit={submitHandler}>
                <div className={classes.input}>
                  <input
                    className={classes.real}
                    type="text"
                    required
                    defaultValue={`$${balance.toLocaleString()}`}
                    style={{ pointerEvents: "none" }}
                  />
                  <label>from Account: Universal </label>
                </div>
                <div className={classes.input}>
                  <input
                    type="text"
                    required
                    value={accountNo}
                    onChange={(event) => setAccountNo(event.target.value)}
                    onBlur={accountNoHandler}
                  />
                  <label>Enter Destination Account Number</label>
                  <div
                    className={classes.abs}
                    style={{
                      display: visible ? "block" : "none",
                      backgroundColor: error ? "rgba(255, 0, 0, 0.493)" : null,
                    }}
                  >
                    {!loading && !error && (
                      <>
                        <i className="fas fa-user-check"></i>
                        {desNo}
                      </>
                    )}
                    {error && <p>You can't send money to self.</p>}
                  </div>
                </div>
                <div className={classes.input}>
                  <input
                    type="number"
                    min="100"
                    className={amount < 100 ? classes.dirty : null}
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    required
                  />
                  <label>Enter Amount</label>
                </div>
                <div className={classes.input}>
                  <input
                    type="text"
                    required
                    maxLength="20"
                    value={narr}
                    onChange={(event) => setNarr(event.target.value)}
                    onBlur={narrBlurHandler}
                  />
                  <label>Enter Narration</label>
                </div>
                <button
                  type="submit"
                  className={classes.btn}
                  disabled={error ? true : null}
                >
                  continue
                </button>
              </form>
            </div>
          )}
        </div>
      )}
      {nextPage && <ConfirmMoney click={closeHandler} />}
    </div>
  );
};

export default SendMoney;
