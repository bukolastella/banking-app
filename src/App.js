import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./components/home/Home";
import { Switch, Route, Redirect } from "react-router";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/auth" />
        </Route>
        <Route path="/auth">
          <Signin />
        </Route>
        <Route path="/register">
          <Signup />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
