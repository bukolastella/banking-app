import React from "react";
import classes from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Modal = () => {
  const dispatch = useDispatch();
  const noHandler = () => {
    dispatch(uiActions.logout());
  };
  const yesHandler = () => {
    dispatch(uiActions.logout());
    dispatch(uiActions.logoutHandler());
  };
  return (
    <div className={classes.Modal}>
      <div className={classes.logout}>
        <p>Are you sure you want to log out?</p>
        <div className={classes.flex}>
          <span onClick={noHandler}>no</span>
          <span onClick={yesHandler}>yes</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
