import styled from 'styled-components';
import {createGrid, createGridUnit} from 'styled-components-grid';
import {map} from '@salad-ui/breakpoint';
import {Box} from '@salad-ui/box';

export const grid = createGrid(map);
export const unit = createGridUnit(map);

export const Grid = styled(Box)`
  ${grid}
`;

export const Unit = styled(Box)`
  ${unit}
`;
