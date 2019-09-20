import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import League from "./pages/league";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Main from "./pages/Main";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/report" component={Main} />
          <Route exact path="/league" component={League} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
