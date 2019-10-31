import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {theme as defaultTheme, Theme, ThemeProvider} from '@salad-ui/theme';
import {ThemeSwitcher} from '~components/ThemeSwitcher';
import {GlobalStyle} from './index.styles';

const IntroPage = React.lazy(() => import('~pages/IntroPage'));
const SettingsPage = React.lazy(() => import('~pages/SettingsPage'));
const PluginsPage = React.lazy(() => import('~pages/PluginsPage'));

const localTheme = (() => {
  const item = localStorage.getItem('@salad-ui:theme');
  if (item) {
    return JSON.parse(item);
  } else {
    return undefined;
  }
})();

export const App = () => {
  const [theme, setTheme] = React.useState<Theme>(localTheme || defaultTheme);
  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    localStorage.setItem('@salad-ui:theme', JSON.stringify(theme));
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <React.Suspense fallback={null}>
          <Switch>
            <Route path="/" exact>
              <IntroPage />
            </Route>
            <Route path="/settings" exact>
              <SettingsPage />
            </Route>
            <Route path="/plugins">
              <PluginsPage />
            </Route>
          </Switch>
        </React.Suspense>
        <ThemeSwitcher theme={theme} onChange={handleThemeChange} />
      </>
    </ThemeProvider>
  );
};
