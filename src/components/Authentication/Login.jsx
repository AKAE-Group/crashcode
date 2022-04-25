import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import PropTypes from 'prop-types';
import icon from '../../images/codesmith.png';

export default function Login ({ handleChange, setToken }) {
  
  // Styling of paper and button for the login screen
  const paperStyle = { padding: 20, height: 500, width: 300,margin: '0 auto'};
  const btnstyle = { margin: '10px 0' };

  // local state to capture the Username and Password
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState('false');


  // fetch function to make a POST request to the server
  const handleSubmit = async ( { Username, Password, isLoggedIn } ) => {
    const res = await fetch('/users/login', {
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
          <img src={icon}></img>
          <h1>CRASH CODE</h1>
          <h2>WELCOME!</h2>
        </Grid>
        <TextField label="Email" placeholder="Enter email" fullWidth id = "email" onChange={e => setUserName(e.target.value)} />
        <TextField label="Password" placeholder="Enter password" type="password" id = "password" fullWidth onChange={e => setPassword(e.target.value)}/>
        <Button type="submit" color="primary" variant="contained" style={btnstyle} onClick={handleSubmit} fullWidth>
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