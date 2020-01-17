import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

export class UserSearch extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
    document.activeElement.blur();
  };

  render() {
    return (
      <form noValidate onSubmit={this.onSubmit}>
        <div>
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
        </div>
      </form>
    );
  }
}

export default UserSearch;
