import React from "react";

import UserItem from "../User/UserItem";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

import PropTypes from "prop-types";

const UserGrid = ({ users, loading }) => {
  if (loading) {
    return (
      <div>
        <LinearProgress variant='query' />
        <LinearProgress variant='query' color='secondary' />
      </div>
    );
  }
  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      {users.map(user => (
        <Grid item xs={12} sm={3} md={2} key={user.id}>
          <UserItem user={user}> </UserItem>
        </Grid>
      ))}
    </Grid>
  );
};

UserGrid.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default UserGrid;
