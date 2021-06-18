import React from "react";
// import Input from "./Input";
import classes from "./Register.module.css";
import Card from "./Card";
import Loader from "../ui/Loader";
import Error from "../ui/Error";
import useInput from "../../hooks/use-input";

const Register = () => {
  const {
    password,
    email,
    loading,
    error,
    setError,
    loginHandler: registerHandler,
    setEmail,
    setPassword,
  } = useInput(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXsGc-C5AZGrgtOB6J5N2_-LG9xaAm4rY"
  );

  return (
    <Card>
      {error && <Error cancel={setError}>{error}</Error>}
      <form onSubmit={registerHandler}>
        <div className={classes.flex}>
          <div
            className={classes.input}
            style={{
              width: "45%",
            }}
          >
            <input type="text" required />
            <label>first name</label>
          </div>
          <div
            className={classes.input}
            style={{
              width: "45%",
            }}
          >
            <input type="text" required />
            <label>last name</label>
          </div>
        </div>
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
          {!loading && "let's go!"}
        </button>
      </form>
    </Card>
  );
};

export default Register;
