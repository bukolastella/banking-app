import React, { useState } from "react";
import classes from "./Icon.module.css";
import Menu from "./Menu";
const Icon = () => {
  const [state, setstate] = useState(false);
  const toggleHandler = () => {
    setstate((pre) => !pre);
  };
  return (
    <div>
      {!state && (
        <div className={classes.icon} onClick={toggleHandler}>
          <i className="fas fa-bars fa-2x"></i>
        </div>
      )}

      {state && <Menu click={toggleHandler} />}
    </div>
  );
};

export default Icon;
