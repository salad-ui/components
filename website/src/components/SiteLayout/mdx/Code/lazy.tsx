import * as React from 'react';
import {LiveProvider, LiveEditor} from 'react-live';
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
} from './lazy.style';

export interface LazyCodeProps {
  scope?: CodeScope;
  language?: string;
  source: string;
  isEditable?: boolean;
  isPreviewable?: boolean;
}

const LazyCode: React.FC<LazyCodeProps> = ({
  scope,
  source,
  isEditable = true,
  isPreviewable = true,
}) => {
  const {imports, dependencies, code} = parse(source);
  const body = React.useRef(code);

  const handleCopy = () =>
    copy(`${imports.join('\n')}\n${body.current}`.trim());

  return (
    <Wrapper>
      <LiveProvider scope={scope} code={code}>
        {isPreviewable && <Preview />}
        <EditorWrapper>
          <Imports>{imports.join('\n')}</Imports>
          <LiveEditor
            disabled={!isEditable}
            onChange={code => (body.current = code)}
          />
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
              code={code}
            />
          </EditorToolbar>
        </EditorWrapper>
      </LiveProvider>
    </Wrapper>
  );
};

export default LazyCode;
