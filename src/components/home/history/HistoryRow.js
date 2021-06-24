import React from "react";
import CreditRow from "./CreditRow";
import DebitRow from "./DebitRow";
import classes from "./HistoryRow.module.css";
import { useSelector } from "react-redux";
const HistoryRow = (props) => {
  const sortData = useSelector((state) => state.bank.sortData);
  const tranData = useSelector((state) => state.bank.tranData);
  let reveal = "";
  const rare = [];
  //get the date stored as keys
  if (props.recent === true) {
    const lastDate = Object.keys(tranData).pop();
    if (tranData && tranData[lastDate]) {
      const lastDateDetail = tranData[lastDate];
      const lastTwoDateDetail = lastDateDetail.slice(-2);
      const dateKey = new Date(lastDate);
      const adjDateKey = String(dateKey).split(" ");
      const reversedData = [...lastTwoDateDetail];
      reversedData.reverse();
      // console.log(reversedData);

      const result = reversedData.map((ev) =>
        ev.amount >= 0 ? (
          <CreditRow key={Math.random()} narr={ev.narration} amt={ev.amount} />
        ) : (
          <DebitRow key={Math.random()} narr={ev.narration} amt={ev.amount} />
        )
      );
      reveal = (
        <div key={Math.random()} className={classes.margin}>
          <span className={classes.HistoryRow}>
            {`${adjDateKey[0]},${adjDateKey[2]} ${adjDateKey[1]} ${adjDateKey[3]} `}
          </span>
          {result}
        </div>
      );
      rare.push(reveal);
    }
  } else {
    for (const [key, value] of Object.entries(sortData)) {
      const dateKey = new Date(key);
      const adjDateKey = String(dateKey).split(" ");
      const result = value.map((ev) =>
        ev.amount >= 0 ? (
          <CreditRow key={Math.random()} narr={ev.narration} amt={ev.amount} />
        ) : (
          <DebitRow key={Math.random()} narr={ev.narration} amt={ev.amount} />
        )
      );
      result.reverse();
      reveal = (
        <div className={classes.margin} key={Math.random()}>
          <span className={classes.HistoryRow}>
            {`${adjDateKey[0]}, ${adjDateKey[2]}  ${adjDateKey[1]} ${adjDateKey[3]} `}
          </span>
          {result}
        </div>
      );
      rare.push(reveal);
    }
    rare.reverse();
  }
  return (
    <>
      {rare.length > 0 ? (
        rare
      ) : (
        <p
          style={{
            fontSize: "1rem",
            margin: "2rem 0rem",
            textAlign: "center",
          }}
        >
          no Transaction history found! <br />
          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <span
            style={{
              fontSize: "0.8rem",
              margin: "3rem 0rem",
            }}
          >
            Try setting a time period.
          </span>
        </p>
      )}
    </>
  );
};

export default HistoryRow;
