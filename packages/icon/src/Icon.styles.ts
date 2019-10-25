import styled from 'styled-components';
import {ColorProps, colorProps} from '@salad-ui/color';
import {MarginProps, marginProps} from '@salad-ui/spacing';
import {IconSize} from './types';

export interface WrapperProps extends ColorProps, MarginProps {
  size?: IconSize;
}

export const Wrapper = styled.span<WrapperProps>`
  display: inline-flex;
  vertical-align: middle;
  ${colorProps}
  ${marginProps}
  & > * {
    ${({size}) => {
      switch (size) {
        case 'small': {
          return `
          width: 18px;
          height: 18px;
        `;
        }
        case 'large': {
          return `
          width: 48px;
          height: 48px;
        `;
        }
        default: {
          return `
          width: 24px;
          height: 24px;
        `;
        }
      }
    }}
  }
` as React.ComponentType<WrapperProps>;
