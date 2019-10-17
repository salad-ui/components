import styled from 'styled-components';
import {ColorProps, colorProps} from '@salad-ui/color';

export const Wrapper = styled.div<ColorProps>`
  display: inline-flex;
  ${colorProps}
  & > svg {
    width: 24px;
    height: 24px;
  }
` as React.ComponentType<ColorProps>;
