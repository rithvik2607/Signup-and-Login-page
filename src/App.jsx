import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Login from './components/Login.component';
import SignUp from './components/SignUp.component';

const App = () => {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          exact path="/"
          component={() => <Login />}
        />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
