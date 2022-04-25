import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId =
  '870413778352-3vtpln31uiods5s2v0epiioj72i624k8.apps.googleusercontent.com';

function GoogleOAuth() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    // Use res.profileObj to access user info
    console.log('Login Success:', res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
    // Modify state to be logged in
  };

  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
    alert('You have been logged out successfully');
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    // Modify state to be logged out
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In With Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}></GoogleLogout>
      ) : null}
    </div>
  );
}
export default GoogleOAuth;
