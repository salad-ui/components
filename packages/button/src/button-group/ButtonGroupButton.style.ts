import styled from 'styled-components';
import {Button} from '../button';

export const Wrapper = styled(Button)`
  &:first-of-type {
    border-radius: 3px 0 0 3px;
  }

  &:last-of-type {
    border-radius: 0 3px 3px 0;
  }

  & + & {
    margin-left: -1px;
  }
`;
