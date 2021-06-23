import React from "react";
import MenuRow from "./MenuRow";
import classes from "./Toggle.module.css";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

const Toggle = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(uiActions.logout());
  };
  const sendMoneyHandler = () => {
    dispatch(uiActions.showSendModalHandler(true));
  };
  return (
    <div className={classes.toggle}>
      <div className={classes.logo}>
        <i className="fas fa-piggy-bank fa-2x"></i>
      </div>
      <Icon />
      <div className={classes.dis}>
        <MenuRow path="/home">
          <i
            className="fas fa-home"
            style={{
              marginRight: "1rem",
            }}
          ></i>
          home
        </MenuRow>
        <div onClick={sendMoneyHandler}>
          <MenuRow>
            <i
              className="fas fa-hand-holding-usd"
              style={{
                marginRight: "1rem",
              }}
            ></i>
            send money
          </MenuRow>
        </div>

        <MenuRow path="/transaction">
          <i
            className="fas fa-history"
            style={{
              marginRight: "1rem",
            }}
          ></i>
          transaction history
        </MenuRow>
        <div onClick={logoutHandler}>
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
    </div>
  );
};

export default Toggle;
