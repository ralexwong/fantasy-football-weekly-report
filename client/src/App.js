import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import League from "./pages/League/League";
import NoMatch from "./pages/NoMatch.js";
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import Intro from './pages/Intro/Intro.js';
import Report from './pages/Report/Report.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/league" component={League} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/intro" component={Intro} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
