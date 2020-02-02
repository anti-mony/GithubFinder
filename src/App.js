import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar";
import UserGrid from "./Components/Layout/UserGrid";
import About from "./Components/Pages/About";
import User from "./Components/User/User";

import axios from "axios";

export class App extends Component {
  state = {
    users: [],
    user: {},
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

  // Get all Users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Get a single user

  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  render() {
    const { users, user, loading } = this.state;

    return (
      <Router>
        <Navbar searchUsers={this.searchUsers} clearSearch={this.clearSearch} />
        <Switch>
          <Route
            exact
            path='/'
            render={props => <UserGrid loading={loading} users={users} />}
          />
          <Route exact path='/about' component={About} />
          <Route
            exact
            path='/user/:login'
            render={props => (
              <User
                {...props}
                getUser={this.getUser}
                user={user}
                loading={loading}
              ></User>
            )}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
