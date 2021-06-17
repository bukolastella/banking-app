import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
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
      </Switch>
    </div>
  );
}

export default App;
