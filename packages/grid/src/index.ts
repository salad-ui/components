import styled from 'styled-components';
import {createGrid, createGridUnit} from 'styled-components-grid';
import {map} from '@salad-ui/breakpoint';
import {Box} from '@salad-ui/box';

export const grid = createGrid(map);
export const unit = createGridUnit(map);

// FIXME: add grid props to Box.omitProps
export const Grid = styled(Box)`
  ${grid}
`;

// FIXME: add unit props to Box.omitProps
export const Unit = styled(Box)`
  ${unit}
`;
