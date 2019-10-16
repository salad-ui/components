import styled, {css} from 'styled-components';
import {transparentize} from 'polished';
import {mr, ml, px, py} from '@salad-ui/spacing';
import {button} from '@salad-ui/typography';
import {color, backgroundColor, borderColor} from '@salad-ui/color';
import {focusStyle} from '@salad-ui/utils';
import {ButtonVariant} from './types';

export interface WrapperProps {
  variant: ButtonVariant;
  isCompact?: boolean;
  isDestructive?: boolean;
}

const commonStyle = css`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  ${button()}
  ${py(0)}
  ${px(2)}
  cursor: pointer;
  border: 0;
  border-radius: 3px;
  background: none;
  text-decoration: none;

  :focus {
    ${focusStyle()}
  }

  :disabled {
    cursor: not-allowed;
  }
`;

const spacingStyle = ({isCompact}: WrapperProps) =>
  isCompact ? `height: 32px;` : `height: 40px;`;

const primaryStyle = ({isDestructive}: WrapperProps) => css`
  ${color(isDestructive ? 'onError' : 'onSecondary')}
  ${backgroundColor(
    isDestructive ? 'error.main' : 'secondary.main',
  )}

  :hover:enabled {
    ${backgroundColor(isDestructive ? 'error.light' : 'secondary.light')}
  }

  :active:enabled {
    ${backgroundColor(isDestructive ? 'error.dark' : 'secondary.dark')}
  }

  :disabled {
    ${color('border.dark')}
    ${backgroundColor('border.light')}
  }
`;

const secondaryStyle = ({isDestructive}: WrapperProps) => css`
  ${color(isDestructive ? 'error.main' : 'secondary.main')}
  ${borderColor(isDestructive ? 'error.main' : 'secondary.main')};
  border-style: solid;
  border-width: 1px;

  :hover:enabled {
    ${color(isDestructive ? 'error.light' : 'secondary.light')};
    ${borderColor(isDestructive ? 'error.light' : 'secondary.light')}
    ${backgroundColor(
      isDestructive ? 'error.light' : 'secondary.light',
      color => transparentize(1 - 0.12, color),
    )};
  }

  :active:enabled {
    ${color(isDestructive ? 'error.dark' : 'secondary.dark')};
    ${borderColor(isDestructive ? 'error.dark' : 'secondary.dark')};
    ${backgroundColor(
      isDestructive ? 'error.light' : 'secondary.light',
      color => transparentize(1 - 0.32, color),
    )};
  }

  :disabled {
    ${color('border.light')};
    ${borderColor('border.light')};
  }
`;

const tertiaryStyle = ({isDestructive}: WrapperProps) => css`
  ${color(isDestructive ? 'error.main' : 'secondary.main')};

  :hover:enabled {
    ${color(isDestructive ? 'error.light' : 'secondary.light')};
    ${backgroundColor(
      isDestructive ? 'error.light' : 'secondary.light',
      color => transparentize(1 - 0.12, color),
    )};
  }

  :active:enabled {
    ${color(isDestructive ? 'error.dark' : 'secondary.dark')};
    ${backgroundColor(
      isDestructive ? 'error.light' : 'secondary.light',
      color => transparentize(1 - 0.32, color),
    )};
  }

  :disabled {
    ${color('border.light')};
  }
`;

const variantStyles = ({variant}: {variant: ButtonVariant}) => {
  switch (variant) {
    case 'primary':
      return primaryStyle;
    case 'secondary':
      return secondaryStyle;
    case 'tertiary':
      return tertiaryStyle;
  }
};

export const Element = styled.a<WrapperProps>`
  ${commonStyle}
  ${spacingStyle}
  ${variantStyles}
`;

export const Before = styled.span`
  display: flex;
  ${mr(0.5)}
`;

export const After = styled.span`
  display: flex;
  ${ml(0.5)}
`;
