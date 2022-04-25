import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import MainContainer from '../Main/MainContainer.jsx';

const SignInOutContainer = ({ setAccount, setToken }) => {
  const [userId, setUserId] = useState();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [showMain, setShowMain] = useState(false);

  const paperStyle = { width: 340, margin: '20px auto' };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div>
      {showMain === true && <MainContainer userId={userId} />}
      {showMain === false && (
        <Paper elevation={20} style={paperStyle}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example">
            <Tab label="Sign Up" />
            <Tab label="Log In" />
          </Tabs>
          <TabPanel value={value} index={1}>
            <Login setShowMain={setShowMain} setUserId={setUserId} />
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Signup setShowMain={setShowMain} setUserId={setUserId} />
          </TabPanel>
        </Paper>
      )}
    </div>
  );
};

export default SignInOutContainer;
