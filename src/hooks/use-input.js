import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const calculateRemainingTime = (expirationTime) => expirationTime - Date.now();

const useInput = (url, register = false) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const loginHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
    if (response.ok) {
      //login function plus the async part
      const expirationTime = Date.now() + data.expiresIn * 1000;
      const { idToken } = data;
      dispatch(uiActions.loginHandler({ idToken, expirationTime, email }));
      // dispatch(uiActions.emailHandler(email));
      const remainingTime = calculateRemainingTime(expirationTime);
      setTimeout(() => {
        dispatch(uiActions.logoutHandler());
      }, remainingTime);
      history.replace("/home");
    }
    //
    const newUser = {
      name: `${firstName} ${lastName}`,
      accountNo: `BS-${Math.random().toString(16).slice(11)}`,
      pin: password,
      email: email,
      // height: "red",
      movements: [
        { date: "06/17/21", amount: 10000, narration: "account opening" },
        // { date: "06/18/21", amount: -3000, narration: "udemy course" },
        // { date: "06/18/21", amount: -3000, narration: "bills" },
        // { date: "06/18/21", amount: 200, narration: "airtime" },
        // { date: "06/19/21", amount: 600, narration: "udemy course" },
        // { date: "06/20/21", amount: 5000, narration: "salary" },
        // { date: "06/20/21", amount: 5000, narration: "bonus" },
        // { date: "06/21/21", amount: -500, narration: "data" },
        // { date: "06/22/21", amount: -3000, narration: "fuel" },
        // { date: "06/22/21", amount: 700, narration: "airtime" },
      ],
    };
    if (register && response.ok) {
      fetch(
        `https://banking-app-7dc7f-default-rtdb.firebaseio.com/users.json`,
        {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  };

  return {
    password,
    error,
    email,
    loading,
    setError,
    loginHandler,
    setEmail,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
  };
};

export default useInput;
