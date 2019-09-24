import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav'
import League from "./pages/League/League";
import NoMatch from "./pages/NoMatch";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Intro from './pages/Intro/Intro';
import Report from './pages/Report/Report';

function App() {
  return (
    <Router>
      <div>
        <Nav />
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
