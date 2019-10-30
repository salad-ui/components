import * as React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {GlobalStyle} from './index.styles';

const SettingsPage = React.lazy(() => import('~pages/SettingsPage'));
const PluginsPage = React.lazy(() => import('~pages/PluginsPage'));

export const App = () => (
  <>
    <GlobalStyle />
    <React.Suspense fallback={null}>
      <Switch>
        <Route path="/" exact>
          <Link to="/settings">Settings</Link>
          <br />
          <Link to="/plugins/featured">Plugins</Link>
          <br />
        </Route>
        <Route path="/settings" exact component={SettingsPage} />
        <Route path="/plugins" component={PluginsPage} />
      </Switch>
    </React.Suspense>
  </>
);
