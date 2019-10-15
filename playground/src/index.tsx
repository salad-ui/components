import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Theme} from '@salad-ui/theme';
import {App} from './App';

ReactDOM.render(
  <BrowserRouter>
    <Theme>
      <App/>
    </Theme>
  </BrowserRouter>,
  document.getElementById('app')
);
