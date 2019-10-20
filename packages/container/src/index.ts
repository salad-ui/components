import styled from 'styled-components';
import {Box} from '@salad-ui/box';

export const container = () => `
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled(Box)`
  ${container}
`;
