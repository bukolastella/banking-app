import React, { useState } from "react";
// import Input from "./Input";
import classes from "./Register.module.css";
import Card from "./Card";
import Loader from "../ui/Loader";
import Error from "../ui/Error";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const registerHandler = (event) => {
    event.preventDefault();
    console.log("kjksd");
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXsGc-C5AZGrgtOB6J5N2_-LG9xaAm4rY",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        setError(data.error.message);
        setTimeout(() => {
          if (!error) {
            setError(false);
          }
        }, 3000);
      }
      setLoading(false);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

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
