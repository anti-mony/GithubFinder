import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Github from "@material-ui/icons/GitHub";
import Web from "@material-ui/icons/Web";
import LinearProgress from "@material-ui/core/LinearProgress";

import Repos from "../Repos/Repos";

import GithubContext from "../../Context/Github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) {
    return (
      <div>
        <LinearProgress variant='query' />
        <LinearProgress variant='query' color='secondary' />
      </div>
    );
  }

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
    >
      <Grid item sm={12} md={6}>
        <Card style={{ margin: 8 }}>
          <CardHeader
            title={name}
            subheader={hireable ? location + " | Hireable" : location}
            action={
              <Fragment>
                <Button
                  aria-label='Github Profile'
                  alt='Github Profile'
                  href={html_url}
                >
                  <Github />
                </Button>
                <Button
                  aria-label='Website/Blog'
                  alt='Website/Blog'
                  href={"https://" + blog}
                >
                  <Web></Web>{" "}
                </Button>
              </Fragment>
            }
          />
          <Grid container justify='center'>
            <img
              alt={name}
              src={avatar_url}
              height='250'
              width='250'
              justify='center'
              style={{ borderRadius: "50%" }}
            ></img>
          </Grid>
          <CardContent>
            <Typography variant='subtitle1'>
              <strong>BIO</strong>
            </Typography>
            <Typography variant='body1' component='p' gutterBottom>
              {bio ? bio : "Not Provided"}
            </Typography>

            <Grid container justify='center'>
              <Grid container spacing={4} justify='space-evenly'>
                <Grid item sm={6}>
                  {" "}
                  <Typography variant='overline' align='center' component='p'>
                    <strong>Following</strong>
                  </Typography>
                  <Typography
                    variant='body1'
                    component='p'
                    align='center'
                    gutterBottom
                  >
                    {following}
                  </Typography>
                </Grid>
                <Grid item sm={6}>
                  {" "}
                  <Typography variant='overline' align='center' component='p'>
                    <strong>Followers</strong>
                  </Typography>
                  <Typography
                    variant='body1'
                    component='p'
                    align='center'
                    gutterBottom
                  >
                    {followers}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={4} justify='space-evenly'>
                <Grid item sm={6}>
                  {" "}
                  <Typography variant='overline' align='center' component='p'>
                    <strong>Public Repos</strong>
                  </Typography>
                  <Typography
                    variant='body1'
                    component='p'
                    align='center'
                    gutterBottom
                  >
                    {public_repos}
                  </Typography>
                </Grid>
                <Grid item sm={6}>
                  {" "}
                  <Typography variant='overline' align='center' component='p'>
                    <strong>Public Gists</strong>
                  </Typography>
                  <Typography
                    variant='body1'
                    component='p'
                    align='center'
                    gutterBottom
                  >
                    {public_gists}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Typography variant='subtitle1'>
              <strong>REPOSITORIES</strong>
            </Typography>
            <Repos repos={repos}></Repos>
          </CardContent>

          <CardActions>
            <Button fullWidth>
              <Link to='/'>Back</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default User;
