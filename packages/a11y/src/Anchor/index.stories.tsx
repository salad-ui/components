import * as React from 'react';
import styled from 'styled-components';
import {action} from '@storybook/addon-actions';
import {AnchorProps, Anchor} from '.';

export default {
  title: 'a11y/Anchor',
};

const StyledAnchor = styled.button`
  --color: 255, 0, 0;

  cursor: pointer;
  display: inline;
  padding: 0;
  font-size: 16px;
  font-family: sans-serif;
  color: rgb(var(--color));
  border: none;
  background: none;
  text-decoration: underline;

  :hover {
    color: rgba(var(--color), 0.85);
  }

  :active {
    color: rgba(var(--color), 0.6);
  }
`;

const MyAnchor = ({
  children,
  ...otherProps
}: Omit<AnchorProps, 'children'> & {children: React.ReactNode}) => {
  return (
    <Anchor {...otherProps}>
      {renderProps => <StyledAnchor {...renderProps}>{children}</StyledAnchor>}
    </Anchor>
  );
};

export const RenderAsALink = () => (
  <>
    <MyAnchor href="https://www.example.com/">I&apos;m a &lt;a&gt;</MyAnchor>
  </>
);

export const RenderAsAButton = () => (
  <>
    <MyAnchor onClick={action('Clicked!')}>I&apos;m a &lt;button&gt;</MyAnchor>
  </>
);
