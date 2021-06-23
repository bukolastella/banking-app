import React from "react";
import Toggle from "./toggle/Toggle";
import classes from "./Home.module.css";
import Header from "./header/Header";
import Chart from "./chart/Chart";
import History from "./history/History";
import Balance from "./balance/Balance";
import CreditCard from "./credit card/CreditCard";
import Slider from "./credit card/mobile/Slider";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bankAction } from "../../store/bank-slice";
import { transferActions } from "../../store/transfer-slice";
import Loader from "../ui/Loader";
import { useHistory } from "react-router";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loadingState, setLoadingState] = useState(false);
  const name = useSelector((state) => state.bank.name);
  const email = localStorage.getItem("email");

  useEffect(() => {
    const fetchData = async () => {
      setLoadingState(true);
      let response = await fetch(
        `https://banking-app-7dc7f-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo="${email}"&print=pretty`
      );
      let data = await response.json();
      if (JSON.stringify(data) === "{}") {
        history.go(0);
        return;
      }
      for (const key in data) {
        dispatch(bankAction.saveName(data[key].name));
        dispatch(bankAction.saveMyNo(data[key].accountNo));
        dispatch(transferActions.savePin(data[key].pin));
        dispatch(
          transferActions.updateMyUrl({
            myUnique: key,
            myMovementNode: data[key].movements.length,
          })
        );
        const balance = data[key].movements.reduce(
          (acc, cur) => acc + cur.amount,
          0
        );
        dispatch(bankAction.saveBalance(balance));
        //group by date
        const dateToData = data[key].movements.reduce((acc, d) => {
          if (Object.keys(acc).includes(d.date)) return acc;

          acc[d.date] = data[key].movements.filter((g) => g.date === d.date);
          return acc;
        }, {});
        const realData = { ...dateToData };
        dispatch(bankAction.saveTranData(realData));
        for (const key in dateToData) {
          dateToData[key] = dateToData[key].map((ev) => ev.amount);
        }
        const date = Object.keys(dateToData);
        const dateToPosAmount = { ...dateToData };
        const dateToNegAmount = { ...dateToData };
        for (const key in dateToPosAmount) {
          dateToPosAmount[key] = dateToPosAmount[key].reduce(function (r, a) {
            return a > 0 ? r + a : r;
          }, 0);
        }
        for (const key in dateToNegAmount) {
          dateToNegAmount[key] = dateToNegAmount[key].reduce(function (r, a) {
            return a < 0 ? r + a : r;
          }, 0);
        }
        dispatch(
          bankAction.saveDateToData({
            date,
            dateToPosAmount,
            dateToNegAmount,
          })
        );
      }

      setLoadingState(false);
    };

    fetchData();
  }, [dispatch, email, history]);
  return (
    <div>
      {loadingState && <Loader color={true} />}
      {!loadingState && (
        <div className={classes.Home}>
          <div className={classes.toogle}>
            <Toggle />
          </div>
          <div className={classes.header}>
            <Header name={`hi, ${name}`} />
          </div>
          <div className={classes.balance}>
            <Balance />
          </div>
          <div className={classes.chart}>
            <Chart />
          </div>
          <div className={classes.history}>
            <History />
          </div>
          <div className={classes.card}>
            <div className={classes.slider}>
              <Slider />
            </div>
            <CreditCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
