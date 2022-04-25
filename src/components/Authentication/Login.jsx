import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import icon from '../../images/codesmith.png';
import MainContainer from '../Main/MainContainer.jsx';

export default function Login({ setShowMain, setUserId }) {
  // Styling of paper and button for the login screen
  const paperStyle = { padding: 20, height: 500, width: 300, margin: '0 auto' };
  const btnstyle = { margin: '10px 0' };

  // local state to capture the Username and Password
  const [Username, setUserName] = useState();
  const [Password, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userId, setUserId] = useState();

  // { Username, Password, isLoggedIn }
  // fetch function to make a POST request to the server
  const handleSubmit = () => {
    //defining the body outside fetch call
    const body = {
      username: Username,
      password: Password,
    };
    console.log('body', body);

    // POST request to the server with the user information and password
    fetch('api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Successful login:', data);
        if (data.isLoggedIn) {
          setIsLoggedIn(true);
          setShowMain(true);
          setUserId(data.userId);
          console.log('User ID check', data.userId);
        }
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  // if state "isLoggedIn === true" then redirect user (using React) to the next page
  return (
    <div>
      {isLoggedIn === true && <MainContainer />}
      {isLoggedIn === false && (
        <Grid>
          <Paper style={paperStyle}>
            <Grid align="center">
              <img src={icon}></img>
              <br></br>
              <h2>CRASH CODE</h2>
              <h3>WELCOME!</h3>
            </Grid>
            <TextField
              label="Email"
              placeholder="Enter email"
              fullWidth
              id="email"
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              id="password"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              onClick={() => handleSubmit(Username, Password, isLoggedIn)}
              fullWidth>
              Sign in
            </Button>
            <Typography align="center"> </Typography>
          </Paper>
        </Grid>
      )}
    </div>
  );
}
