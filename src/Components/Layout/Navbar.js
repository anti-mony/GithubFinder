import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Github from "@material-ui/icons/GitHub";
import PropTypes from "prop-types";
import UserSearch from "../User/UserSearch";
import Grid from "@material-ui/core/Grid";

const Navbar = ({ title, searchUsers }) => {
  return (
    <AppBar
      position='sticky'
      style={{ background: "#e0e0e0", color: "#212121" }}
    >
      <Toolbar>
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={6} sm={6}>
            <Grid container direction='row' alignItems='center' link=''>
              <Github />
              <Typography variant='h6' style={{ margin: 8 }}>
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6}>
            <UserSearch searchUsers={searchUsers}></UserSearch>
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
  title: PropTypes.string.isRequired
};

export default Navbar;
