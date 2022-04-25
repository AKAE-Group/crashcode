import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';
import icon from '../../images/codesmith.png';
import MainContainer from '../Main/MainContainer.jsx';

export default function Login ({ handleChange, setShowMain }) {
  
  // Styling of paper and button for the login screen
  const paperStyle = { padding: 20, height: 500, width: 300,margin: '0 auto'};
  const btnstyle = { margin: '10px 0' };

  // local state to capture the Username and Password
  const [Username, setUserName] = useState();
  const [Password, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();

  // { Username, Password, isLoggedIn }
  // fetch function to make a POST request to the server
  const handleSubmit = () => {
    //defining the body outside fetch call
    const body = {
      username: Username,
      password: Password
    }
    console.log('body', body);

    fetch('api/users/login', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => { 
      console.log('Successful login:', data)
      if(data.isLoggedIn) { 
        setIsLoggedIn(true)
        setShowMain(true)
        setUserId(data.userId)
        console.log('User ID check', data.userId); 
      }
    })
    .catch((error) => {
      console.log('Error: ', error);
    })
  };

  return (
    <div>
      { isLoggedIn === true && <MainContainer />}
      { isLoggedIn === false && (
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <img src={icon}></img>
            <br></br>
            CRASH CODE
            <br></br>
            WELCOME!
          </Grid>
          <TextField label="Email" placeholder="Enter email" fullWidth id = "email" onChange={e => setUserName(e.target.value)} />
          <TextField label="Password" placeholder="Enter password" type="password" id = "password" fullWidth onChange={e => setPassword(e.target.value)}/>
          <Button type="submit" color="primary" variant="contained" style={btnstyle} onClick={() => handleSubmit(Username, Password, isLoggedIn)} fullWidth>
              Sign in
          </Button>
          <Typography align="center"> </Typography>
        </Paper>
      </Grid>
      )}
    </div>
  );
};