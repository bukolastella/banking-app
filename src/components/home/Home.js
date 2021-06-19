import React from "react";
import Toggle from "./toggle/Toggle";
import classes from "./Home.module.css";
import Header from "./header/Header";
import Chart from "./chart/Chart";
import History from "./history/History";
import Balance from "./balance/Balance";
import CreditCard from "./credit card/CreditCard";
import Slider from "./credit card/mobile/Slider";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.toogle}>
        <Toggle />
      </div>
      <div className={classes.header}>
        <Header />
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
  );
};

export default Home;
