import styled, {css} from 'styled-components';
import {mr, ml, px} from '@salad-ui/spacing';
import {button} from '@salad-ui/typography';
import {color, backgroundColor, borderColor} from '@salad-ui/color';
import {ButtonVariant} from './types';

const commonStyle = css`
  ${button()}
  ${px(2)}
  box-sizing: border-box;
  height: 32px;
  cursor: pointer;
  border: 0;
  border-radius: 3px;
  background: none;

  :disabled {
    cursor: not-allowed;
  }
`;

const primaryStyle = css`
  ${color('onSecondary')}
  ${backgroundColor('secondary.main')}

  :hover:enabled,
  :focus:enabled {
    ${backgroundColor('secondary.dark')}
  }

  :active:enabled {
    ${backgroundColor('secondary.light')}
  }

  :disabled {
    ${color('border.dark')}
    ${backgroundColor('border.light')}
  }
`;

const secondaryStyle = css`
  ${color('secondary.main')}
  ${borderColor('secondary.main')};
  border-style: solid;
  border-width: 1px;

  :hover:enabled,
  :focus:enabled {
    ${color('secondary.dark')};
    ${borderColor('secondary.dark')};
  }

  :active:enabled {
    ${color('secondary.light')};
    ${borderColor('secondary.light')};
  }

  :disabled {
    ${color('border.light')};
    ${borderColor('border.light')};
  }
`;

const tertiaryStyle = css`
  ${color('secondary.main')};

  :hover:enabled,
  :focus:enabled {
    ${color('secondary.dark')};
  }

  :active:enabled {
    ${color('secondary.light')};
  }

  :disabled {
    ${color('secondary.light')};
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

export interface WrapperProps {
  variant: ButtonVariant;
}

export const AnchorWrapper = styled.a<WrapperProps>`
  ${commonStyle}
  ${variantStyles}
`;

export const ButtonWrapper = styled.button<WrapperProps>`
  ${commonStyle}
  ${variantStyles}
`;

export const Before = styled.span`
  ${mr(0.5)}
`;

export const After = styled.span`
  ${ml(0.5)}
`;
