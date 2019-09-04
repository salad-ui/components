import styled, {css, keyframes} from 'styled-components';
import {ButtonVariant, ButtonSize} from './types';
import {button} from '@design-system-example/typography';
import {color, fg, bg, shade, tint, colors} from '@design-system-example/color';

// adapted from https://github.com/WordPress/gutenberg/blob/6928e41c8afd7daa3a709afdda7eee48218473b7/packages/components/src/button/style.scss

const busyAnimation = keyframes`
  0%   { background-position: 200px 0; }
`;

const commonStyle = `
  ${button()}
  display: inline-flex;
	text-decoration: none;
	margin: 0;
	border: 0;
	cursor: pointer;
	-webkit-appearance: none;
	background: none;
`;

interface SizeStyleProps {
  size: ButtonSize;
}

const sizeStyle = ({size}: SizeStyleProps): string => {
  switch (size) {
    case 'sm':
      return `
        height: 24px;
        line-height: 22px;
        padding: 0 8px 1px;
        font-size: 11px;
      `;
    case 'md':
      return `
        padding: 0 10px 1px;
        line-height: 26px;
        height: 28px;
        border-radius: 3px;
        white-space: nowrap;
        border-width: 1px;
        border-style: solid;
      `;
    case 'lg':
      return `
        height: 30px;
        line-height: 28px;
        padding: 0 12px 2px;
      `;
  }
};

interface VariantStyleProps {
  variant: ButtonVariant;
  isBusy: boolean;
}

const primaryVariantStyle = css<VariantStyleProps>`
  color: ${colors.white};
  ${bg('button')}
  border-color: ${shade('button', 0.2)} ${shade('button', 0.25)} ${shade(
  'button',
  0.25,
)};
  box-shadow: inset 0 -1px 0 ${shade('button', 0.25)};
  text-shadow:
    0 -1px 1px ${shade('button', 0.3)},
    1px 0 1px ${shade('button', 0.3)},
    0 1px 1px ${shade('button', 0.3)},
    -1px 0 1px ${shade('button', 0.3)};

  :hover,
  :focus:enabled {
    color: ${colors.white};
    ${bg(shade('button', 0.05))}
    border-color: ${shade('button', 0.5)};
  }

  :hover {
    box-shadow: inset 0 -1px 0 ${shade('button', 0.5)};
  }

  :focus:enabled {
    box-shadow:
      inset 0 -1px 0 ${shade('button', 0.5)},
      0 0 0 1px ${colors.white},
      0 0 0 3px ${shade('button', 0.05)};
  }

  :active:enabled {
    ${bg(shade('button', 0.2))}
    border-color: ${shade('button', 0.5)};
    box-shadow: inset 0 1px 0 ${shade('button', 0.5)};
  }

  :disabled,
  :disabled:active:enabled {
    ${fg(tint('button', 0.4))}
    ${bg('button')}
    border-color: ${shade('button', 0.07)};
    box-shadow: none;
    text-shadow: none;

    :focus:enabled {
      color: ${tint('button', 0.4)};
      border-color: ${shade('button', 0.07)};
      box-shadow:
        0 0 0 1px ${colors.white},
        0 0 0 3px ${colors['blue-medium-focus']};
    }
  }

  ${({isBusy}) =>
    isBusy &&
    css`
      &,
      &:disabled {
        color: ${colors.white};
        background-size: 100px 100%;
        background-image: linear-gradient(
          -45deg,
          ${color('primary')} 28%,
          ${shade('primary', 0.3)} 28%,
          ${shade('primary', 0.3)} 72%,
          ${color('primary')} 72%
        );
        border-color: ${shade('primary', 0.5)};
      }
    `}
`;

const secondaryVariantStyle = css`
  color: #555;
  border-color: #ccc;
  background: #f7f7f7;
  box-shadow: inset 0 -1px 0 #ccc;
  vertical-align: top;

  :hover {
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
      0 0 0 3px ${colors['blue-medium-focus']};
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

const tertiaryVariantStyle = css`
  margin: 0;
  padding: 0;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  background: none;
  outline: none;
  text-align: left;

  /* Mimics the default link style in common.css */
  color: #0073aa;
  text-decoration: underline;
  transition-property: border, background, color;
  transition-duration: 0.05s;
  transition-timing-function: ease-in-out;
  @include reduce-motion('transition');

  :hover,
  :active {
    color: #00a0d2;
  }

  :focus {
    color: #124964;
    box-shadow: 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, 0.8);
  }

  &.is-destructive {
    color: $alert-red;
  }

  color: theme(outlines);

  // Matches default button in hit area. See line 11.
  padding: 0 10px;
  line-height: 26px;
  height: 28px;

  &:active:focus:enabled {
    box-shadow: none;
  }

  &:not(:disabled):not([aria-disabled='true']):not(.is-default):hover {
    color: color(theme(outlines) shade(25%));
  }
`;

const variantStyle = ({variant}: VariantStyleProps) => {
  switch (variant) {
    case 'primary':
      return primaryVariantStyle;
    case 'secondary':
      return secondaryVariantStyle;
    case 'tertiary':
      return tertiaryVariantStyle;
  }
};

interface BusyStyleProps {
  isBusy: boolean;
}

const busyStyle = ({isBusy}: BusyStyleProps) =>
  isBusy &&
  css`
    &,
    &:disabled {
      animation: ${busyAnimation} 2500ms infinite linear;
      background-size: 100px 100%;
      background-image: repeating-linear-gradient(
        -45deg,
        ${colors['light-gray-500']},
        ${colors.white} 11px,
        ${colors.white} 10px,
        ${colors['light-gray-500']} 20px
      );
      opacity: 1;
    }
  `;

export interface StyledAnchorProps {
  variant: ButtonVariant;
  size: ButtonSize;
  isBusy: boolean;
}

export const StyledAnchor = styled.a<StyledAnchorProps>`
  ${commonStyle}
  ${busyStyle}
  ${sizeStyle}
  ${variantStyle}
`;

export interface StyledButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  isBusy: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${commonStyle}
  ${busyStyle}
  ${sizeStyle}
  ${variantStyle}
`;
