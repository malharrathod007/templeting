import React from 'react';
import { Router } from 'react-router-dom';
import {
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';
import register from "./Component/Auth/register"
// import PageModule from './components/modules/page';
import Login from './Component/Auth/Login'
import leave from './Component/Leave/index'

const AppRouter = (props) => (
    <Router history={props.history}>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Register" component={register}/>
        <Route path="/HRM" component={leave}/>

        <Redirect to="/" />
      </Switch>
    </Router>
);

export default AppRouter;
