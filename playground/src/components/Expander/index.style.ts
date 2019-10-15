import styled from 'styled-components';
import { ExpanderState } from './types';

export interface WrapperProps {
  state: ExpanderState;
  property: 'width' | 'height';
  widthOrHeight: React.RefObject<number>;
}

export const Wrapper = styled.div<WrapperProps>`
  overflow: hidden;
  transition-duration: 0.3s;
  transition-property: ${({property}) => property};
  transition-timing-function: ease-in-out;

  ${({state, property, widthOrHeight}) => {
    switch (state) {
      case 'collapse': {
        return {
          display: 'block',
          [property]: `${widthOrHeight.current}px`,
          willChange: 'height',
        };
      }
      case 'collapsing': {
        return {
          display: 'block',
          [property]: '0px',
          willChange: 'height',
        };
      }
      case 'collapsed': {
        return {
          display: 'none',
          [property]: '0px'
        };
      }
      case 'expand': {
        return {
          display: 'block',
          [property]: '0px',
          willChange: 'height',
        };
      }
      case 'expanding': {
        return {
          display: 'block',
          [property]: `${widthOrHeight.current}px`,
          willChange: 'height',
        };
      }
      case 'expanded': {
        return {
          display: 'block',
          [property]: 'auto'
        };
      }
    }
  }}
  
`;
