import React, { useState } from "react";
import classes from "./Icon.module.css";
import Menu from "./Menu";
const Icon = () => {
  const [state, setstate] = useState(false);
  const toggleHandler = () => {
    setstate((pre) => !pre);
  };
  const close = () => {
    setstate(false);
  };
  return (
    <div>
      {!state && (
        <span className={classes.icon} onClick={toggleHandler}>
          <i className="fas fa-bars fa-2x"></i>
        </span>
      )}

      {state && <Menu click={close} close={close} />}
    </div>
  );
};

export default Icon;
