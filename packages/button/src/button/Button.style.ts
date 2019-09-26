import styled, {keyframes, css} from 'styled-components';
import {shade, tint} from 'polished';
import * as colors from '@salad-ui/color';
import {mr, ml} from '@salad-ui/spacing';
import {button, link} from '@salad-ui/typography';
import {ButtonSize, ButtonVariant} from './types';

const primary = colors.blue50;

const commonStyle = css`
  display: inline-flex;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  background: none;
  border-radius: 3px;
  white-space: nowrap;

  :disabled {
    cursor: default;
    opacity: 0.3;
  }
`;

const sizeStyles = ({size}: {size: ButtonSize}) => {
    switch (size) {
        case 'small':
            return `
        height: 24px;
        line-height: 22px;
        padding: 0 8px 1px;
        font-size: 11px;
      `;
        case 'medium':
            return `
        height: 28px;
        line-height: 26px;
        padding: 0 10px 1px;
      `;
        case 'large':
            return `
        height: 30px;
        line-height: 28px;
        padding: 0 12px 2px;
      `;
    }
};

const raisedStyle = `
  border-width: 1px;
  border-style: solid;
`;

const primaryStyle = css`
  ${raisedStyle}
  color: ${colors.white};
  background: ${primary};
  border-color: ${shade(0.2, primary)} ${shade(0.25, primary)} ${shade(
    0.25,
    primary,
)};
  box-shadow: inset 0 -1px 0 ${shade(0.25, primary)};
  text-shadow: 
    0 -1px 1px ${shade(0.3, primary)},
    1px 0 1px ${shade(0.3, primary)},
    0 1px 1px ${shade(0.3, primary)},
    -1px 0 1px ${shade(0.3, primary)}
  ;

  :hover:enabled {
    box-shadow: inset 0 -1px 0 ${shade(0.5, primary)};
  }

  :focus:enabled {
    box-shadow:
      inset 0 -1px 0 ${shade(0.5, primary)},
      0 0 0 1px ${colors.white},
      0 0 0 3px ${shade(0.5, primary)}
    ;
  }

  :hover:enabled, &:focus:enabled {
    color: ${colors.white};
    background: ${shade(0.05, primary)};
    border-color: ${shade(0.5, primary)};
  }

  :active:enabled {
    background: ${shade(0.2, primary)};
    border-color: ${shade(0.5, primary)};
    box-shadow: inset 0 1px 0 ${shade(0.5, primary)};
  }

  :disabled {
    color: ${tint(0.4, primary)};
    background: ${primary};
    border-color: ${shade(0.07, primary)};
    box-shadow: none;
    text-shadow: none;
  }

  ${({isBusy}: {isBusy: boolean}) =>
        isBusy &&
    `
    &, &:disabled {
      color: ${colors.white};
      border-color: ${shade(0.5, primary)};
      background-size: 100px 100%;
      background-image: linear-gradient(
        -45deg,
        ${primary} 28%,
        ${shade(0.3, primary)} 28%,
        ${shade(0.3, primary)} 72%,
        ${primary} 72%
      );
    }
  `}

`;

const secondaryStyle = css`
  ${raisedStyle}
  color: #555;
  border-color: #ccc;
  background: #f7f7f7;
  box-shadow: inset 0 -1px 0 #ccc;
  vertical-align: top;

  :hover:enabled {
    background: #fafafa;
    border-color: #999;
    box-shadow: inset 0 -1px 0 #999;
    color: #23282d;
    text-decoration: none;
  }

  :focus:enabled {
    background: #fafafa;
    color: #23282d;
    border-color: #999;
    box-shadow: inset 0 -1px 0 #999, 0 0 0 1px ${colors.white},
      0 0 0 3px ${primary};
    text-decoration: none;
  }

  :active:enabled {
    background: #eee;
    border-color: #999;
    box-shadow: inset 0 1px 0 #999;
  }

  :disabled {
    color: #a0a5aa;
    border-color: #ddd;
    background: #f7f7f7;
    box-shadow: none;
    text-shadow: 0 1px 0 #fff;
    transform: none;
  }
`;

const tertiaryStyle = `
    ${link()}
    
    :hover:enabled, :focus:enabled, :active:enabled {
      background: none;
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

const busyKeyframes = keyframes`
  from {
    background-position: 200px 0;
  }
`;

export const busyStyle = ({isBusy}: {isBusy: boolean}) =>
    isBusy &&
  css`
    &,
    &:disabled {
      animation: ${busyKeyframes} 2500ms infinite linear;
      background-size: 100px 100%;
      background-image: repeating-linear-gradient(
        -45deg,
        ${colors.grey50},
        ${colors.white} 11px,
        ${colors.white} 10px,
        ${colors.grey50} 20px
      );
      opacity: 1;
    }
  `;

export interface WrapperProps {
    size: ButtonSize;
    variant: ButtonVariant;
    isBusy: boolean;
}

export const AnchorWrapper = styled.a<WrapperProps>`
  ${({size}) => button({size})}
  ${commonStyle}
  ${busyStyle}
  ${sizeStyles}
  ${variantStyles}
`;

export const ButtonWrapper = styled.button<WrapperProps>`
  ${({size}) => button({size})}
  ${commonStyle}
  ${busyStyle}
  ${sizeStyles}
  ${variantStyles}
`;

export const Before = styled.span`
  ${mr('xxs')}
`;

export const After = styled.span`
  ${ml('xxs')}
`;
