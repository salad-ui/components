import * as React from 'react';
import styled from 'styled-components';
import {Title} from '@salad-ui/typography';
import {m, p, ml, mr, mt} from '@salad-ui/spacing';
import {body} from '@salad-ui/typography';
import {color, backgroundColor, borderColor} from '@salad-ui/color';

export default {
  title: 'foundations',
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
  border: 1px solid ${borderColor('border.normal')};
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

const ColorVariable = styled.div`
  ${mt(2)}
`;

export const Color = () => {
  return (
    <>
      <ColorVariable>
        <Title size="large">Primary</Title>
        <ColorSquares>
          <ColorSquare bg="primary.normal" fg="onPrimary">
            primary.normal
          </ColorSquare>
          <ColorSquare bg="primary.light" fg="onPrimary">
            primary.light
          </ColorSquare>
          <ColorSquare bg="primary.dark" fg="onPrimary">
            primary.dark
          </ColorSquare>
          <ColorSquare bg="onPrimary" fg="primary.normal">
            onPrimary
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Success</Title>
        <ColorSquares>
          <ColorSquare bg="success.normal" fg="onSuccess">
            success.normal
          </ColorSquare>
          <ColorSquare bg="success.light" fg="onSuccess">
            success.light
          </ColorSquare>
          <ColorSquare bg="success.dark" fg="onSuccess">
            success.dark
          </ColorSquare>
          <ColorSquare bg="onSuccess" fg="success.normal">
            onSuccess
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Warning</Title>
        <ColorSquares>
          <ColorSquare bg="warning.normal" fg="onWarning">
            warning.normal
          </ColorSquare>
          <ColorSquare bg="warning.light" fg="onWarning">
            warning.light
          </ColorSquare>
          <ColorSquare bg="warning.dark" fg="onWarning">
            warning.dark
          </ColorSquare>
          <ColorSquare bg="onWarning" fg="warning.normal">
            onWarning
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Alert</Title>
        <ColorSquares>
          <ColorSquare bg="error.normal" fg="onError">
            error.normal
          </ColorSquare>
          <ColorSquare bg="error.light" fg="onError">
            error.light
          </ColorSquare>
          <ColorSquare bg="error.dark" fg="onError">
            error.dark
          </ColorSquare>
          <ColorSquare bg="onError" fg="error.normal">
            onError
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Surface</Title>
        <ColorSquares>
          <ColorSquare bg="surface" fg="onSurface.normal">
            surface
          </ColorSquare>
          <ColorSquare bg="onSurface.normal" fg="surface">
            onSurface.normal
          </ColorSquare>
          <ColorSquare bg="onSurface.subtle" fg="surface">
            onSurface.subtle
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Background</Title>
        <ColorSquares>
          <ColorSquare bg="background" fg="onBackground.normal">
            background
          </ColorSquare>
          <ColorSquare bg="onBackground.normal" fg="background">
            onBackground.normal
          </ColorSquare>
          <ColorSquare bg="onBackground.subtle" fg="background">
            onBackground.subtle
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
      <ColorVariable>
        <Title size="large">Border</Title>
        <ColorSquares>
          <ColorSquare bg="border.normal" fg="onSurface.normal">
            border.normal
          </ColorSquare>
          <ColorSquare bg="border.light" fg="onSurface.normal">
            border.light
          </ColorSquare>
          <ColorSquare bg="border.dark" fg="onSurface.normal">
            border.dark
          </ColorSquare>
        </ColorSquares>
      </ColorVariable>
    </>
  );
};
