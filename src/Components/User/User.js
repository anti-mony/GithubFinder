import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Github from "@material-ui/icons/GitHub";
import Web from "@material-ui/icons/Web";
import LinearProgress from "@material-ui/core/LinearProgress";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

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
              <Typography variant='h5' component='strong'>
                <strong>Bio</strong>
              </Typography>
              <Typography variant='body1' component='p' gutterBottom>
                {bio}
              </Typography>

              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}></Grid>
                <Grid container item xs={12} spacing={3}></Grid>
                <Grid container item xs={12} spacing={3}></Grid>
              </Grid>
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
  }
}

export default User;
