import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GithubState from "./Context/Github/GithubState";
import Navbar from "./Components/Layout/Navbar";
import UserGrid from "./Components/Layout/UserGrid";
import About from "./Components/Pages/About";
import User from "./Components/User/User";
import NotFound from "./Components/Pages/NotFound";

const App = () => {
  return (
    <GithubState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={UserGrid} />
          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' component={User} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </GithubState>
  );
};

export default App;
