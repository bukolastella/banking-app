import React from "react";
import MenuRow from "./MenuRow";
import classes from "./Menu.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

const Menu = (props) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(uiActions.logout());
  };
  const sendMoneyHandler = () => {
    dispatch(uiActions.showSendModalHandler(true));
  };
  return (
    <div className={classes.gray} onClick={props.click}>
      <div className={classes.menu}>
        <span className={classes.icon} onClick={props.close}>
          <i className="fas fa-times fa-2x"></i>
        </span>
        <div className={classes.logo}>
          <i className="fas fa-piggy-bank fa-2x"></i>
        </div>
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

export default Menu;
