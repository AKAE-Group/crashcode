import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import MainContainer from '../Main/MainContainer.jsx';

const Signup = () => {

  //styling of the apps and button
  const paperStyle = { padding: 20, height: 500, width: 300, margin: '0 auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };

  // setting local state for the app
  const [Username, setUserName] = useState();
  const [Password, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = () => {
    const body = {
      username: Username,
      password: Password
    }
    console.log('body', body);
    
    fetch('api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => { 
      console.log('Successful login:', data)
      if(data.isLoggedIn) { 
        setIsLoggedIn(true)
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
      )}
    </div>
  );
};

export default Signup;
