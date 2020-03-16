import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export const About = () => {
  return (
    <div style={{ margin: 16 }}>
      <Container>
        <Typography variant='h3'>About</Typography>
        <Typography variant='subtitle1' component='p'>
          v1.0.0
        </Typography>
      </Container>
    </div>
  );
};

export default About;
