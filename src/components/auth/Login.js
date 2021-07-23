import React from "react";
import Card from "./Card";
import classes from "./Login.module.css";
import Loader from "../ui/Loader";
import Error from "../ui/Error";
import useInput from "../../hooks/use-input";

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
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`
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
            className={password.length > 0 ? classes.dirty : null}
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
