import * as React from 'react';
import indent from 'indent-string';
import {getParameters} from 'codesandbox/lib/api/define';

export interface CodeSandboxButtonProps {
  dependencies: string[];
  imports: string[];
  code: string;
}

export const CodeSandboxButton = ({
  dependencies,
  imports,
  code,
}: CodeSandboxButtonProps) => {
  const codesanbox = {
    files: {
      'package.json': {
        isBinary: false,
        content: JSON.stringify({
          dependencies: {
            react: '^16.9.0',
            'react-dom': '^16.9.0',
            'styled-components': '^4.0.0',
            '@salad-ui/theme': 'latest',
            ...dependencies.reduce(
              (obj, dep) => ({
                ...obj,
                [dep]: 'latest',
              }),
              {},
            ),
          },
        }),
      },
      'index.html': {
        isBinary: false,
        content: '<div id="app"></div>',
      },
      'index.js': {
        isBinary: false,
        content: `
import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from "@salad-ui/theme";
import {App} from './App';

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById('app')
);
`.trim(),
      },
      'App.js': {
        isBinary: false,
        content: `
import React from 'react';
${imports.join('\n')}

export const App = () => (
${indent(
  code
    .trim()
    .replace(/<>/g, '<React.Fragment>')
    .replace(/<\/>/, '</React.Fragment>')
    .replace(/;(\S)*$/, ''),
  2,
)}
);
`.trim(),
      },
    },
  };

  return (
    <form
      action="https://codesandbox.io/api/v1/sandboxes/define"
      method="POST"
      target="_blank"
    >
      <input type="hidden" name="query" value="module=/App.js" />
      <input
        type="hidden"
        name="parameters"
        value={getParameters(codesanbox)}
      />
      <input type="submit" value="🗃" title="Open in CodeSandbox" />
    </form>
  );
};
