import * as React from 'react';
import styled from 'styled-components';
import {Title, body} from '@salad-ui/typography';
import {m, p, ml, mr, mt} from '@salad-ui/spacing';

import {color, backgroundColor, borderColor} from '@salad-ui/color';

export default {
  title: 'foundations/colors',
};

const ColorSquare = styled.li<{fg: string; bg: string}>`
  ${body({isSmall: true})}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  ${({fg}) => color(fg)}
  ${({bg}) => backgroundColor(bg)}
  border: 1px solid ${borderColor('border.main')};
  border-radius: 3px;
  ${mr(2)}
  :last-of-type {
    ${ml(0)}
  }
`;

const ColorSquares = styled.ul`
  display: flex;
  ${m(0)}
  ${p(0)}
`;

const ColorVariable = styled.span`
  ${mt(2)}
`;

export const Color = () => {
  return (
    <>
      <ColorVariable>
        <Title size="large">Primary</Title>
        <ColorSquares>
          <ColorSquare bg="primary.main" fg="onPrimary">
            primary.main
          </ColorSquare>
          <ColorSquare bg="primary.light" fg="onPrimary">
            primary.light
          </ColorSquare>
          <ColorSquare bg="primary.dark" fg="onPrimary">
            primary.dark
          </ColorSquare>
          <ColorSquare bg="onPrimary" fg="primary.main">
            onPrimary
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Secondary</Title>
        <ColorSquares>
          <ColorSquare bg="secondary.main" fg="onSecondary">
            secondary.main
          </ColorSquare>
          <ColorSquare bg="secondary.light" fg="onSecondary">
            secondary.light
          </ColorSquare>
          <ColorSquare bg="secondary.dark" fg="onSecondary">
            secondary.dark
          </ColorSquare>
          <ColorSquare bg="onSecondary" fg="secondary.main">
            onSecondary
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Success</Title>
        <ColorSquares>
          <ColorSquare bg="success.main" fg="onSuccess">
            success.main
          </ColorSquare>
          <ColorSquare bg="success.light" fg="onSuccess">
            success.light
          </ColorSquare>
          <ColorSquare bg="success.dark" fg="onSuccess">
            success.dark
          </ColorSquare>
          <ColorSquare bg="onSuccess" fg="success.main">
            onSuccess
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Warning</Title>
        <ColorSquares>
          <ColorSquare bg="warning.main" fg="onWarning">
            warning.main
          </ColorSquare>
          <ColorSquare bg="warning.light" fg="onWarning">
            warning.light
          </ColorSquare>
          <ColorSquare bg="warning.dark" fg="onWarning">
            warning.dark
          </ColorSquare>
          <ColorSquare bg="onWarning" fg="warning.main">
            onWarning
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Alert</Title>
        <ColorSquares>
          <ColorSquare bg="error.main" fg="onError">
            error.main
          </ColorSquare>
          <ColorSquare bg="error.light" fg="onError">
            error.light
          </ColorSquare>
          <ColorSquare bg="error.dark" fg="onError">
            error.dark
          </ColorSquare>
          <ColorSquare bg="onError" fg="error.main">
            onError
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Surface</Title>
        <ColorSquares>
          <ColorSquare bg="surface" fg="onSurface.main">
            surface
          </ColorSquare>
          <ColorSquare bg="onSurface.main" fg="surface">
            onSurface.main
          </ColorSquare>
          <ColorSquare bg="onSurface.subtle" fg="surface">
            onSurface.subtle
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Background</Title>
        <ColorSquares>
          <ColorSquare bg="background" fg="onBackground.main">
            background
          </ColorSquare>
          <ColorSquare bg="onBackground.main" fg="background">
            onBackground.main
          </ColorSquare>
          <ColorSquare bg="onBackground.subtle" fg="background">
            onBackground.subtle
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Border</Title>
        <ColorSquares>
          <ColorSquare bg="border.main" fg="onSurface.main">
            border.main
          </ColorSquare>
          <ColorSquare bg="border.light" fg="onSurface.main">
            border.light
          </ColorSquare>
          <ColorSquare bg="border.dark" fg="onSurface.main">
            border.dark
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
    </>
  );
};
