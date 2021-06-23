import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./components/home/Home";
import Transaction from "./components/transaction/Transaction";
import { Switch, Route, Redirect } from "react-router";
import SendMoney from "./components/send money/SendMoney";
import Modal from "./components/logout/Modal";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";

function App() {
  const initialState = localStorage.getItem("token");
  const [stateToken] = useState(initialState);
  const isLoggedIn = useSelector((state) => !!state.ui.token);
  const toLoggedOut = useSelector((state) => state.ui.logout);
  const toShowSendModal = useSelector((state) => state.ui.showSendModal);
  const dispatch = useDispatch();
  //getting the time left if you leave
  useEffect(() => {
    if (stateToken) {
      let timeLeft = localStorage.getItem("deadLine") - Date.now();
      if (timeLeft < 6000) timeLeft = 0;
      setTimeout(() => {
        dispatch(uiActions.logoutHandler());
      }, timeLeft);
      // console.log(logoutTimer);
      // dispatch(uiActions.test(logoutTimer));
    }
  }, [stateToken, dispatch]);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/auth" />
        </Route>
        {!isLoggedIn && (
          <Route path="/auth">
            <Signin />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path="/register">
            <Signup />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/home">
            <Home />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/transaction">
            <Transaction />
          </Route>
        )}
        <Route path="*">
          {isLoggedIn && <Redirect to="/home" />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
      </Switch>
      {toLoggedOut && <Modal />}
      {toShowSendModal && (
        <Route>
          <Redirect to="/home" />
          <SendMoney />
        </Route>
      )}
    </div>
  );
}

export default App;
