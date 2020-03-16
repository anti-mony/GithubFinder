import React, { useContext } from "react";

import UserItem from "../User/UserItem";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import GithubContext from "../../Context/Github/githubContext";

const UserGrid = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

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

export default UserGrid;
