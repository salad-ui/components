import * as React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import { SettingsPage } from '~pages/SettingsPage';
import {GlobalStyle} from './index.style';

export const App = () => (
  <>
    <GlobalStyle/>
    <Switch>
      <Route path="/" exact>
        <Link to="/settings">Settings</Link>
      </Route>
      <Route path="/settings" exact component={SettingsPage}/>
    </Switch>
  </>
);
