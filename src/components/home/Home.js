import React from "react";
import Toggle from "./toggle/Toggle";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.Home}>
        <div className={classes.toogle}>
        <Toggle />

        </div>
    </div>
  );
};

export default Home;
