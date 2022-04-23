import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@material-ui/core';

import icon from '../images/codesmith.png';

const Login = ({ handleChange }) => {
  const paperStyle = { padding: 20, height: 450, width: 300, margin: '0 auto' };
  const btnstyle = { margin: '8px 0' };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <img src={icon}></img>
          <h1>CRASH COURSE</h1>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth>
          Sign in
        </Button>
        <Typography align="center">
          {' '}
          <Link href="#"> Forgot password </Link>
        </Typography>
        <Typography align="center">
          {' '}
          Do you have an account?
          <Link href="#" onClick={() => handleChange('event', 1)}>
            {' '}
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
