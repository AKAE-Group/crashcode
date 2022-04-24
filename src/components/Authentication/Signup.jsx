import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

const Signup = () => {
  const paperStyle = { padding: 20, height: 500, width: 300, margin: '0 auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
        </Grid>
        <form>
          <TextField fullWidth label="Email" placeholder="Enter your email" />
          /** pull out the email attached here **\
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
          />
          <h3></h3>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
