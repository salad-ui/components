import * as React from 'react';
import {Grid, Unit} from '.';

export default {title: 'foundations/grid'};

// TODO: text align

export const Demo = () => (
  <Grid>
    <Unit size={1 / 5} display="flex" justifyContent="center">
      A
    </Unit>
    <Unit size={1 / 5}>B</Unit>
    <Unit size={1 / 5}>C</Unit>
    <Unit size={1 / 5}>D</Unit>
    <Unit size={1 / 5}>E</Unit>
  </Grid>
);
