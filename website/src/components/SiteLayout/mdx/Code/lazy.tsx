import * as React from 'react';
/* eslint-disable @typescript-eslint/ban-ts-ignore */
// @ts-ignore TODO: submit a PR to react-live types so that onChange doesn't override the onChange from the Context
import {LiveProvider, LiveEditor, LiveContext} from 'react-live';
/* eslint-enable @typescript-eslint/ban-ts-ignore */
import copy from 'clipboard-copy';
import {CodeScope} from './types';
import {parse} from './parse';
import {CodeSandboxButton} from './CodeSandboxButton';
import {
  Wrapper,
  Preview,
  EditorWrapper,
  EditorToolbar,
  Error,
  Imports,
} from './lazy.styles';

export interface LazyCodeProps {
  scope?: CodeScope;
  language?: string;
  source: string;
  isInline?: boolean;
  isPreviewable?: boolean;
}

// TODO: submit a PR to react-live types so that onChange doesn't override the onChange from context
const Editor = ({
  isDisabled,
  onChange,
}: {
  isDisabled: boolean;
  onChange: (code: string) => void;
}) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const live = React.useContext<any>(LiveContext);
  /* eslint-enable @typescript-eslint/no-explicit-any */
  return (
    <LiveEditor
      disabled={isDisabled}
      onChange={code => {
        live.onChange(code);
        onChange(code);
      }}
    />
  );
};

const LazyCode: React.FC<LazyCodeProps> = ({
  scope,
  source,
  isInline = true,
  isPreviewable = true,
}) => {
  const {imports, dependencies, code} = parse(source);
  const body = React.useRef(code);

  const handleChange = (code: string) => (body.current = code);

  const handleCopy = () =>
    copy(`${imports.join('\n')}\n${body.current}`.trim());

  return (
    <Wrapper>
      <LiveProvider scope={scope} code={code} noInline={!isInline}>
        {isPreviewable && <Preview />}
        <EditorWrapper>
          <Imports>{imports.join('\n')}</Imports>
          <Editor isDisabled={!isPreviewable} onChange={handleChange} />
          {isPreviewable && <Error />}
          <EditorToolbar>
            <input
              type="button"
              onClick={handleCopy}
              value="📋"
              title="Copy to clipboard"
            />{' '}
            <CodeSandboxButton
              imports={imports}
              dependencies={dependencies}
              code={body.current}
            />
          </EditorToolbar>
        </EditorWrapper>
      </LiveProvider>
    </Wrapper>
  );
};

export default LazyCode;
