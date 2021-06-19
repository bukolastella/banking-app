import React from "react";
import MenuRow from "./MenuRow";
import classes from "./Menu.module.css";
const Menu = (props) => {
  return (
    <div className={classes.gray}>
      <div className={classes.menu}>
        <div className={classes.icon} onClick={props.click}>
          <i className="fas fa-times fa-2x"></i>
        </div>
        <div className={classes.logo}>
          <i className="fas fa-piggy-bank fa-2x"></i>
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
    </div>
  );
};

export default Menu;
