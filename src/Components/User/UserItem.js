import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Person from "@material-ui/icons/Person";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <Card style={{ margin: 8 }}>
      <CardMedia
        component='img'
        alt={login}
        height='216'
        width='216'
        image={avatar_url}
      />
      <Grid container justify='flex-start' alignItems='center'>
        <Grid item xs={9} sm={8} md={8}>
          <CardContent>
            <Typography variant='h6' component='h6'>
              {login}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={3} sm={4} md={4}>
          <CardActions>
            <Link to={`/user/${login}`}>
              <Button color='primary'>
                <Person />
              </Button>
            </Link>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
