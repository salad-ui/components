import styled, {css} from 'styled-components';
import {mr, ml, px} from '@salad-ui/spacing';
import {button} from '@salad-ui/typography';
import {color, backgroundColor, borderColor} from '@salad-ui/color';
import {ButtonVariant} from './types';
import {focusStyle} from '@salad-ui/utils';

export interface WrapperProps {
  variant: ButtonVariant;
  isCompact?: boolean;
  isDestructive?: boolean;
}

const commonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${button()}
  ${px(2)}
  box-sizing: border-box;
  cursor: pointer;
  border: 0;
  border-radius: 3px;
  background: none;
  text-decoration: none;

  :focus {
    ${focusStyle('secondary.light')}
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
    ${backgroundColor(
      isDestructive ? 'error.light' : 'secondary.light',
    )} /* TODO: opacity */
  }

  :active:enabled {
    ${backgroundColor(isDestructive ? 'error.light' : 'secondary.light')}
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
    )}; /* TODO: opacity 12% */
  }

  :active:enabled {
    ${color(isDestructive ? 'error.dark' : 'secondary.dark')};
    ${borderColor(isDestructive ? 'error.dark' : 'secondary.dark')};
    ${backgroundColor(
      isDestructive ? 'error.light' : 'secondary.light',
    )}; /* TODO: opacity 32% */
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
    )}; /* TODO: opacity 12% */
  }

  :active:enabled {
    ${color(isDestructive ? 'error.dark' : 'secondary.dark')};
    ${backgroundColor(
      isDestructive ? 'error.light' : 'secondary.light',
    )}; /* TODO: opacity 32% */
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

export const Element = styled.button<WrapperProps>`
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
