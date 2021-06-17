import React from "react";
import Card from "./Card";
import classes from "./Login.module.css";
import Input from "./Input";

const Login = () => {
  return (
    <Card>
      <form>
        <Input type="email" label="Email" />
        <Input type="password" label="password" />
        <button type="submit" className={classes.btn}>
          let me in
        </button>
      </form>
    </Card>
  );
};

export default Login;
