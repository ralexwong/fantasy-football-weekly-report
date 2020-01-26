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
import Report2 from './pages/Report2/Report2'

import history from './history';

function App() {
  return (
    <Router history={history}>
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/report" render={props => <Report {...props} />} />
          <Route exact path="/payouts" render={props => <Payouts {...props} />} />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/signup" render={props => <Signup {...props} />} />
          <Route exact path="/intro" render={props => <Intro {...props} />} />
          <Route exact path ="/input1" render={props => <Input1 {...props} />} />
          <Route exact path ="/input2" render={props => <Input2 {...props} />} />
          <Route exact path ="/input3" render={props => <Input3 {...props} />} />
          <Route exact path ="/report2" render={props => <Report2 {...props} />}  />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
