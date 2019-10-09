/**
 * The bulk of the Code component is lazily loaded because syntax highlighting libraries can
 * be of considerible size and affect performance
 * Note: React.Suspense doesn't work for SSR yet
 */
import * as React from 'react';
import {CodeContext} from './CodeContext';
export * from './types';
export * from './CodeContext';

export interface CodeProps {
  previewable?: 'true' | 'false';
  className: string;
  children: string;
}

const isSSR = typeof window === 'undefined';
const LazyLiveCode = React.lazy(() => import('./lazy'));

const SimpleCode = ({children}: {children: string}) => (
  <code>{children.trim()}</code>
);

export const Code: React.FC<CodeProps> = ({
  previewable,
  className = '',
  children,
}) => {
  const scope = React.useContext(CodeContext);
  const language = className.replace(/language-/, '');

  if (isSSR || language !== 'jsx') {
    return <SimpleCode>{children}</SimpleCode>;
  }

  return (
    <React.Suspense fallback={<SimpleCode>{children}</SimpleCode>}>
      <LazyLiveCode
        scope={scope}
        language={language}
        source={children}
        isPreviewable={previewable !== 'false'}
      />
    </React.Suspense>
  );
};
