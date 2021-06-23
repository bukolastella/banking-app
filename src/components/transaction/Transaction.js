import React, { useState, useEffect } from "react";
import Toggle from "../home/toggle/Toggle";
import Header from "../home/header/Header";
import classes from "./Transaction.module.css";
import HistoryRow from "../home/history/HistoryRow";
import { useDispatch, useSelector } from "react-redux";
import { bankAction } from "../../store/bank-slice";
import Loader from "../ui/Loader";
const Transaction = () => {
  const d = new Date();
  d.setMonth(d.getMonth() - 1);
  const startDate = [
    d.getFullYear(),
    ("0" + (d.getMonth() + 1)).slice(-2),
    ("0" + d.getDate()).slice(-2),
  ].join("-");
  const endDate = [
    new Date().getFullYear(),
    ("0" + (new Date().getMonth() + 1)).slice(-2),
    ("0" + new Date().getDate()).slice(-2),
  ].join("-");
  const [stateStartDate, setStartDate] = useState(startDate);
  const [stateEndDate, setEndDate] = useState(endDate);
  const [loadingState, setLoadingState] = useState(false);
  const dispatch = useDispatch();
  const tranData = useSelector((state) => state.bank.tranData);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingState(true);
      const response = await fetch(
        "https://banking-app-7dc7f-default-rtdb.firebaseio.com/users.json"
      );
      const data = await response.json();
      for (const key in data) {
        //group by date
        const dateToData = data[key].movements.reduce((acc, d) => {
          if (Object.keys(acc).includes(d.date)) return acc;

          acc[d.date] = data[key].movements.filter((g) => g.date === d.date);
          return acc;
        }, {});

        dispatch(bankAction.saveTranData(dateToData));
      }
      setLoadingState(false);
    };
    fetchData();
  }, [dispatch]);
  useEffect(() => {
    const sortArray = Object.entries(tranData);
    const filterArray = sortArray.filter(
      ([key]) =>
        new Date(key).setHours(0, 0, 0, 0) >=
          new Date(stateStartDate).setHours(0, 0, 0, 0) &&
        new Date(key).setHours(0, 0, 0, 0) <=
          new Date(stateEndDate).setHours(0, 0, 0, 0)
    );
    const objectFilterArray = Object.fromEntries(filterArray);
    dispatch(bankAction.saveSortData(objectFilterArray));
  }, [stateStartDate, stateEndDate, dispatch, tranData]);
  return (
    <div>
      {loadingState && <Loader color={true} />}

      {!loadingState && (
        <div className={classes.Transaction}>
          <div className={classes.toogle}>
            <Toggle />
          </div>
          <div className={classes.header}>
            <Header name="Transactions" />
          </div>
          <div className={classes.period}>
            <div className={classes.date}>
              <h3>Time Period</h3>
              <div className={classes.border}>
                <span>Start Date</span>
                <input
                  type="date"
                  defaultValue={stateStartDate}
                  onChange={(event) => setStartDate(event.target.value)}
                />
              </div>
              <div>
                <span>End Date</span>
                <input
                  type="date"
                  defaultValue={stateEndDate}
                  onChange={(event) => setEndDate(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={classes.history}>
            <div className={classes.hist}>
              <p>All Transactions</p>
              <HistoryRow />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transaction;
