import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav'
import Footer from './components/Footer'

import Payouts from "./pages/Payouts/Payouts";
import NoMatch from "./pages/NoMatch";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Intro from './pages/Intro/Intro';
import Report from './pages/Report/Report';
import Input1 from './pages/Input/Input';
import Input2 from './pages/Input2/Input2';
import Input3 from './pages/Input3/Input3';

import history from './history';



function App() {
  return (
    <Router history={history}>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/payouts" component={Payouts} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/intro" component={Intro} />
          <Route exact path ="/input1" component={Input1} />
          <Route exact path ="/input2" component={Input2} />
          <Route exact path ="/input3" component={Input3} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
