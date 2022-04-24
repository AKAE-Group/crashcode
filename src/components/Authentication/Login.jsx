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

import icon from '../../images/codesmith.png';

// after you create a user , save user in state?

const userLogin = ({ userId }) => {
  userId.username = '';
  userId.password = '';
};

const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: 500,
    width: 300,
    margin: '0 auto',
  };

  const btnstyle = { margin: '10px 0' };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <img src={icon}></img>
          <h1>CRASH CODE</h1>
          <h2>WELCOME!</h2>
        </Grid>
        <TextField label="Email" placeholder="Enter email" fullWidth />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth>
          Sign in
        </Button>
        <h3></h3>
        <Typography align="center"> </Typography>
        <Typography align="center">
          {' '}
          Don't have an account?
          <Link href="#" onClick={() => handleChange('event', 1)}>
            {' '}
            SIGN UP
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
