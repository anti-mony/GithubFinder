import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Github from "@material-ui/icons/GitHub";
import PropTypes from "prop-types";
import UserSearch from "../User/UserSearch";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Navbar = ({ title, searchUsers, clearSearch }) => {
  return (
    <AppBar
      position='sticky'
      style={{ background: "#e0e0e0", color: "#212121" }}
    >
      <Toolbar>
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={5} sm={6}>
            <Grid container direction='row' alignItems='center' link=''>
              <Github />
              <Typography variant='h6' style={{ margin: 4 }}>
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={7} sm={6}>
            <Grid container direction='row' alignItems='center'>
              <Grid item xs={9} md={11}>
                <UserSearch searchUsers={searchUsers}></UserSearch>
              </Grid>
              <Grid item xs={3} md={1}>
                <Button onClick={clearSearch}>Clear</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navbar.defaultProps = {
  title: "Github Finder"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  searchUsers: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired
};

export default Navbar;
