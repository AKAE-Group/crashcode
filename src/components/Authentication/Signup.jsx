import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';

const Signup = () => {

  //styling of the apps and button
  const paperStyle = { padding: 20, height: 500, width: 300, margin: '0 auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };

  // setting local state for the app
  const [Username, setUserName] = useState();
  const [Password, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState('false');


  const handleSubmit = async ( { Username, Password, isLoggedIn } ) => {
    const res = await fetch('/users/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: Username,
        password: Password
      })
      .then(response => response.json())
      .then(data => { console.log('Successful login:', data) })
      .then(() => { if(data) { setIsLoggedIn('true') } })
      .catch((error) => {
        console.log(error('Error: ', error));
      })
    });
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
        </Grid>
        <form>
          <TextField fullWidth label="Email" placeholder="Enter your email" value = {Username} onChange={event => setUserName(event.target.value)}/>
          <TextField fullWidth label="Password" placeholder="Enter your password" value = {Password} onChange={event => setPassword(event.target.value)}/>
          <h3></h3>
          <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
