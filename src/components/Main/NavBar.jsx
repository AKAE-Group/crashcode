import * as React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 1,
              fontFamily: 'Space Grotesk',
              fontSize: '2rem',
              marginLeft: '2rem',
            }}>
            crashCode
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
