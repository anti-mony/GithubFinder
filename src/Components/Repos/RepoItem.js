import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export const RepoItem = ({ repo }) => {
  return (
    <Paper variant='outlined'>
      <Button href={repo.html_url} fullWidth>
        {repo.name}
      </Button>
    </Paper>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
