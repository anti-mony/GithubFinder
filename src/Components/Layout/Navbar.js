import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Github from "@material-ui/icons/GitHub";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import UserSearch from "../User/UserSearch";

const Navbar = ({ title, searchUsers, clearSearch }) => {
  return (
    <AppBar
      position='sticky'
      style={{ background: "#e0e0e0", color: "#212121" }}
    >
      <Toolbar>
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={6} sm={4}>
            <Grid container direction='row' alignItems='center' link=''>
              <Github />
              <Typography variant='h6' style={{ margin: 4 }}>
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid item sm={4}>
              <UserSearch
                searchUsers={searchUsers}
                clearSearch={clearSearch}
              ></UserSearch>
            </Grid>
          </Hidden>
          <Grid item xs={6} sm={4}>
            <Box display='flex' flexDirection='row-reverse'>
              <Link to='/about'>
                <Button>About</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
      <Hidden smUp>
        <Toolbar>
          <Box width={1}>
            <UserSearch
              searchUsers={searchUsers}
              clearSearch={clearSearch}
            ></UserSearch>
          </Box>
        </Toolbar>
      </Hidden>
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
