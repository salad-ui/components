import * as React from 'react';
import styled from 'styled-components';
import {action} from '@storybook/addon-actions';
import {ButtonProps, Button} from '.';

export default {
  title: 'utilities/a11y/Button',
};

const StyledButton = styled.button`
  --color: 255, 0, 0;

  cursor: pointer;
  display: inline-block;
  padding: 8px 16px;
  font-size: 16px;
  font-family: sans-serif;
  color: rgb(var(--color));
  border: 2px solid rgb(var(--color));
  background: white;
  text-decoration: none;

  :hover {
    color: rgba(var(--color), 0.85);
    border-color: rgba(var(--color), 0.85);
  }

  :active {
    color: rgba(var(--color), 0.6);
    border-color: rgba(var(--color), 0.6);
  }
`;

const MyButton = ({
  children,
  ...otherProps
}: Omit<ButtonProps, 'children'> & {children: React.ReactNode}) => {
  return (
    <Button {...otherProps}>
      {renderProps => <StyledButton {...renderProps}>{children}</StyledButton>}
    </Button>
  );
};

export const RenderAsALink = () => (
  <>
    <MyButton href="https://www.example.com/">I&apos;m a &lt;a&gt;</MyButton>
  </>
);

export const RenderAsAButton = () => (
  <>
    <MyButton onClick={action('Clicked!')}>I&apos;m a &lt;button&gt;</MyButton>
  </>
);
