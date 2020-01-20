import React, { Component } from "react";
import PropTypes from "prop-types";

import Navbar from "./Components/Layout/Navbar";
import UserGrid from "./Components/Layout/UserGrid";

import axios from "axios";

export class App extends Component {
  state = {
    users: [],
    loading: false
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired
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
      <React.Fragment>
        <Navbar searchUsers={this.searchUsers} clearSearch={this.clearSearch} />
        <UserGrid loading={this.state.loading} users={this.state.users} />
      </React.Fragment>
    );
  }
}

export default App;
