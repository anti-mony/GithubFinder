import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Snackbar from "@material-ui/core/Snackbar";
import PropTypes from "prop-types";

export class UserSearch extends Component {
  state = {
    text: "",
    open: false
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleClick = () => {
  //   setOpen(true);
  // };

  // handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.setState({ open: true });
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
      document.activeElement.blur();
    }
  };

  render() {
    return (
      <form noValidate onSubmit={this.onSubmit}>
        <TextField
          id='search'
          name='text'
          type='text'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>
            )
          }}
          placeholder='Search Username'
          size='small'
          fullWidth
          value={this.state.text}
          onChange={this.onChange}
        />
        <div>
          <Snackbar
            autoHideDuration={1500}
            open={this.state.open}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id='message-id'> Enter keywords to search </span>}
            onClose={() => this.setState({ open: false })}
          />
        </div>
      </form>
    );
  }
}

export default UserSearch;
