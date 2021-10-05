import React from 'react';
import { Switch } from 'react-router-dom';
import { Home } from '../pages/Home/home';
import Route from './routes';


const Routes = () => (
  <Switch>
    <Route path='/' exact component={Home} />
  </Switch>
);

export default Routes;
