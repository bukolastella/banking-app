import React from "react";
import Card from "./Card";
import classes from "./Login.module.css";
import Loader from "../ui/Loader";
import Error from "../ui/Error";
import useInput from "../../hooks/use-input";
// import Input from "./Input";

const Login = () => {
  const {
    password,
    email,
    loading,
    error,
    setError,
    loginHandler,
    setEmail,
    setPassword,
  } = useInput(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXsGc-C5AZGrgtOB6J5N2_-LG9xaAm4rY"
  );

  return (
    <Card>
      {error && <Error cancel={setError}>{error}</Error>}

      <form onSubmit={loginHandler}>
        <div className={classes.input}>
          <input
            type="email"
            required
            value={email}
            className={email.length > 0 ? classes.dirty : null}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Email</label>
        </div>
        <div className={classes.input}>
          <input
            type="password"
            required
            value={password}
            minLength={6}
            className={email.length > 0 ? classes.dirty : null}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label>password</label>
        </div>
        <button type="submit" className={classes.btn}>
          {loading && <Loader />}
          {!loading && "let me in"}
        </button>
      </form>
    </Card>
  );
};

export default Login;
