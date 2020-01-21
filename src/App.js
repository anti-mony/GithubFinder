import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar";
import UserGrid from "./Components/Layout/UserGrid";
import About from "./Components/Pages/About";

import axios from "axios";

export class App extends Component {
  state = {
    users: [],
    loading: false
  };

  clearSearch = async () => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.slice(0, 18), loading: false });
  };

  async componentDidMount() {
    this.clearSearch();
  }

  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <Router>
        <Navbar searchUsers={this.searchUsers} clearSearch={this.clearSearch} />
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <UserGrid loading={this.state.loading} users={this.state.users} />
            )}
          />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
