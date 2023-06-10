import React, { useState } from 'react';
import Title from './components/Title';
import Button from './components/Button';
import PrintToScreen from './components/PrintToScreen';
import classes from './App.module.css';
import Login from './components/Login';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [loginToken, setLoginToken] = useState('');
  const [displayRequest, setDisplayRequest] = useState(
    'This is a test for request'
  );
  const [displayResponse, setDisplayResponse] = useState(
    'This is a test for response'
  );

  const loginHandler = (token) => {
    setLoginToken(token)
  };

  const handleRequestDisplayUpdate = (state) => {
    setDisplayRequest(state);
  };
  const handleResponseDisplayUpdate = (state) => {
    setDisplayResponse(state);
  };

  return (
    <div className={classes.container}>
      <div className={classes['item-header']}>
        <div className={classes['section-header']}>
          <h1>
            Vendor Credential App<span>Zero Knowledge</span>
          </h1>
        </div>
      </div>
      <div className={classes['item-main1']}>
        <div className={classes['flex-column']}>
          <Title name='Login User' />
          <div>
            {/* {isAdminLoggedIn && ( */}
            <div className={classes['flex.column']}>
              <Login
                handleRequestDisplayUpdate={handleRequestDisplayUpdate}
                handleResponseDisplayUpdate={handleResponseDisplayUpdate}
                isUserLoggedIn={isUserLoggedIn}
                loginHandler={loginHandler}
              />
            </div>
            {/* )} */}
            {/* {!isAdminLoggedIn && (
              <div className={classes['flex-column']}>
                <Button onClick={() => true}>View My Account</Button>
                <Button onClick={() => true}>Update My Account</Button>
                <Button onClick={() => true}>Find Account</Button>
                <Button onClick={() => true}>Search Group ID</Button>
                <Button onClick={() => true}>Create A New User</Button>
                <Button onClick={() => true}>Update An Account</Button>
                <Button onClick={() => true}>Delete An Account</Button>
              </div>
            )} */}
          </div>
        </div>
      </div>
      <div className={classes['item-main2']}>
        <Title name='User Account' />
      </div>
      <div className={classes['item-main3']}>
        <Title name='Other' />
      </div>
      <div className={classes['item-side1']}>
        <h2 className={classes.center}>Request</h2>
        <div>
          <PrintToScreen message={displayRequest} />
        </div>
      </div>
      <div className={classes['item-side2']}>
        <h2 className={classes.center}>Response</h2>
        <div>
          <PrintToScreen message={displayResponse} />
        </div>
      </div>
      <div className={classes['item-footer']}>footer</div>
    </div>
  );
}

export default App;