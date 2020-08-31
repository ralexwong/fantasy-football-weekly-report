import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Intronav from './components/Nav'

import Payouts from "./pages/Payouts/Payouts";
import NoMatch from "./pages/NoMatch";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Intro from './pages/Intro/Intro';
import Sleeper from './pages/Sleeper/Sleeper';
import Espn from './pages/Espn/Espn';

import EspnWeeklyReport from "./pages/Report/EspnWeeklyReport";
import EspnOverallReport from './pages/Report2/EspnOverallReport';

import SleeperWeeklyReport from './pages/Report/SleeperWeeklyReport';
import SleeperOverallReport from './pages/Report2/SleeperOverallReport';

import history from './history';

const style = {
  margin: "0",
  padding: "2rem",
  boxSizing: "border-box inherit",
  fontFamily: "Lato, sans-serif",
  fontWeight: "400",
  lineHeight: "1.7",
}

function App() {
  return (
    <Router history={history}>
      <div style={style}>
        <Intronav />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/weekly-report-sleeper" render={props => <SleeperWeeklyReport {...props} />} />
          <Route exact path="/overall-report-sleeper" render={props => <SleeperOverallReport {...props} />}  />
          <Route exact path="/payouts" render={props => <Payouts {...props} />} />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/signup" render={props => <Signup {...props} />} />
          <Route exact path="/sleeper" render={props => <Sleeper {...props} />} />
          <Route exact path="/espn" render={props => <Espn {...props} />} />

          <Route exact path="/weekly-report-espn" render={props => <EspnWeeklyReport {...props} />} />
          <Route exact path="/overall-report-espn" render={props => <EspnOverallReport {...props} />}  />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
