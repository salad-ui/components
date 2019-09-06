import styled from 'styled-components';
import {Link} from 'gatsby';
import {darken, lighten, rgba} from 'polished';

import {ButtonSize, ButtonVariant} from './Button.types';
import {COLOR} from '../../constants';

export const config = {
  boxShadow: `
    0 0 0 1px rgba(0,0,0,.03), 0 1px 0 rgba(0,0,0,.05), 0 1px 3px rgba(0,0,0,.1)
  `,
  boxShadowHover: `
    0 0 0 1px rgba(0,0,0,.03), 0 1px 0 rgba(0,0,0,.08), 0 3px 8px rgba(0,0,0,.1)
  `,
  focusBorderSize: '3px',
  focusColor: COLOR.focus,
  default: {
    backgroundColor: COLOR.uiBackground,
    color: COLOR.text,
    focus: COLOR.brand,
  },
  primary: {
    backgroundColor: COLOR.uiBackgroundPrimary,
    color: COLOR.textPrimary,
    focus: COLOR.brand,
  },
  size: {
    lg: {
      padding: '15px 30px',
    },
    md: {
      padding: '10px 20px',
    },
    sm: {
      padding: '6px 15px',
    },
  },
};

export interface ButtonBaseProps {
  size: ButtonSize;
  variant: ButtonVariant;
}

export const ButtonBase = styled.button<ButtonBaseProps>`
  appearance: none;
  border-radius: 4px;
  border: none;
  box-shadow: ${config.boxShadow};
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1;
  padding: ${config.size.md.padding};
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translateY(0);
  transition: all 100ms linear;

  &:hover {
    box-shadow: ${config.boxShadowHover};
  }

  &:active {
    background: linear-gradient(
      ${darken(0.06, config.default.backgroundColor)},
      ${config.default.backgroundColor}
    );
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    z-index: 1;
  }

  ${({size}) => `
    padding: ${config.size[size].padding};
  `};

  ${({variant}) => `
    background: linear-gradient(
      ${lighten(0.06, config[variant].backgroundColor)},
      ${config[variant].backgroundColor}
    );
    border-bottom: 1px solid ${darken(0.05, config[variant].backgroundColor)};
    color: ${config[variant].color};

    &:hover {
      background: linear-gradient(
        ${lighten(0.08, config[variant].backgroundColor)},
        ${config[variant].backgroundColor}
      );
      color: ${config[variant].color};
    }

    &:active {
      background: linear-gradient(
        ${darken(0.06, config[variant].backgroundColor)},
        ${config[variant].backgroundColor}
      );
      color: ${config[variant].color};
    }

    &:focus {
      border-bottom-color: ${config[variant].backgroundColor};
      box-shadow: ${config.boxShadow},
        0 0 0 ${config.focusBorderSize} ${rgba(config[variant].focus, 0.3)};
    }
  `};

  &.is-block {
    display: block;
    width: 100%;
  }
`;

export const ButtonLink = ButtonBase.withComponent(Link);
export const ButtonExternalLink = ButtonBase.withComponent('a');
