import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import GithubContext from "../../Context/Github/githubContext";

const UserSearch = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChange = e => {
    setText(e.target.value);
  };

  const { clearSearch, searchUsers } = githubContext;

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setOpen(true);
    } else {
      searchUsers(text);
      setText("");
      document.activeElement.blur();
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <form noValidate onSubmit={onSubmit}>
      <TextField
        id='search'
        name='text'
        type='text'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              {" "}
              <Button onClick={clearSearch}>Clear</Button>
            </InputAdornment>
          )
        }}
        placeholder='Search Username'
        fullWidth
        value={text}
        onChange={onChange}
        size='small'
        style={{
          backgroundColor: "#eeeeee"
        }}
        variant='outlined'
      />
      <div>
        <Snackbar
          autoHideDuration={2500}
          open={open}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={
            <span id='message-id'> Empty Search ! Please enter some </span>
          }
          onClose={handleClose}
        />
      </div>
    </form>
  );
};

export default UserSearch;
