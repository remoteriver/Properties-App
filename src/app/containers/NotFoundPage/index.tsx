import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';

export const NotFoundPage = () => {
  return (
    <>
      <Container>
        <Box m={30}></Box>
        <Box textAlign="center">
          <Typography variant="h2">404 Not Found</Typography>
        </Box>
      </Container>
    </>
  );
};
