import React from "react";
import MenuRow from "./MenuRow";
import classes from "./Toggle.module.css";

const Toggle = () => {
  return (
    <div className={classes.toggle}>
      <div className={classes.logo}>
        <i class="fas fa-piggy-bank fa-2x"></i>
      </div>
      <MenuRow>
        <i
          className="fas fa-home"
          style={{
            marginRight: "1rem",
          }}
        ></i>
        home
      </MenuRow>
      <MenuRow>
        <i
          className="fas fa-hand-holding-usd"
          style={{
            marginRight: "1rem",
          }}
        ></i>
        send money
      </MenuRow>
      <MenuRow>
        <i
          className="fas fa-history"
          style={{
            marginRight: "1rem",
          }}
        ></i>
        transaction history
      </MenuRow>
      <MenuRow>
        <i
          className="fas fa-sign-out-alt"
          style={{
            marginRight: "1rem",
          }}
        ></i>
        logout
      </MenuRow>
    </div>
  );
};

export default Toggle;
