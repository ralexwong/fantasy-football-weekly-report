import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Navagation from './components/Nav'
import Footer from './components/Footer'

import Payouts from "./pages/Payouts/Payouts";
import NoMatch from "./pages/NoMatch";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Intro from './pages/Intro/Intro';
import Report from './pages/Report/Report';
import SleeperInput from './pages/SleeperInput/SleeperInput';
import EspnInput from './pages/EspnInput/EspnInput';
import Report2 from './pages/Report2/Report2';

import history from './history';

const style = {
  margin: "0",
  padding: "0",
  boxSizing: "border-box inherit",
  fontFamily: "Lato, sans-serif",
  fontWeight: "400",
  lineHeight: "1.7",
}

function App() {
  return (
    <Router history={history}>
      <div style={style}>
        <Navagation />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/report" render={props => <Report {...props} />} />
          <Route exact path ="/report2" render={props => <Report2 {...props} />}  />
          <Route exact path="/payouts" render={props => <Payouts {...props} />} />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/signup" render={props => <Signup {...props} />} />
          <Route exact path ="/sleeperInput" render={props => <SleeperInput {...props} />} />
          <Route exact path="/espnInput" render={props => <EspnInput {...props} />} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
