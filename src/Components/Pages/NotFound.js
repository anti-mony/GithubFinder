import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function NotFound() {
  return (
    <div style={{ margin: 16 }}>
      <Container>
        <Typography variant='h3'>Not Found</Typography>
        <Typography variant='subtitle1' component='p'>
          The page you were looking for does not exist
        </Typography>
      </Container>
    </div>
  );
}
