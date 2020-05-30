// HomeTeam-Client
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import globalStyles from "./assets/styles/global.css";
import "materialize-css/dist/css/materialize.min.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HouseholdAdmin from "./pages/HouseholdAdmin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />

        <Route exact path="/dashboard" component={Dashboard} />

        <Route exact path="/household/admin" component={HouseholdAdmin} />

        {/* <Route exact path="/household">
          <HouseholdAdmin />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;