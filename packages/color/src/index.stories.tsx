import * as React from 'react';
import styled, {ThemeConsumer} from 'styled-components';
import {Title} from '@salad-ui/typography';
import {m, p, ml, mr, mt} from '@salad-ui/spacing';
import {body} from '@salad-ui/typography';

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
  color: ${({fg}) => fg};
  background-color: ${({bg}) => bg};
  border: 1px solid ${({theme}) => theme.color.border.normal};
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

export const color = () => {
  return (
    <ThemeConsumer>
      {theme => (
        <>
          <ColorVariable>
            <Title size="large">Primary</Title>
            <ColorSquares>
              <ColorSquare
                bg={theme.color.primary.normal}
                fg={theme.color.onPrimary}
              >
                primary.normal
              </ColorSquare>
              <ColorSquare
                bg={theme.color.primary.light}
                fg={theme.color.onPrimary}
              >
                primary.light
              </ColorSquare>
              <ColorSquare
                bg={theme.color.primary.dark}
                fg={theme.color.onPrimary}
              >
                primary.dark
              </ColorSquare>
              <ColorSquare
                bg={theme.color.onPrimary}
                fg={theme.color.primary.normal}
              >
                onPrimary
              </ColorSquare>
            </ColorSquares>
          </ColorVariable>
          <ColorVariable>
            <Title size="large">Success</Title>
            <ColorSquares>
              <ColorSquare
                bg={theme.color.success.normal}
                fg={theme.color.onSuccess}
              >
                success.normal
              </ColorSquare>
              <ColorSquare
                bg={theme.color.success.light}
                fg={theme.color.onSuccess}
              >
                success.light
              </ColorSquare>
              <ColorSquare
                bg={theme.color.success.dark}
                fg={theme.color.onSuccess}
              >
                success.dark
              </ColorSquare>
              <ColorSquare
                bg={theme.color.onSuccess}
                fg={theme.color.success.normal}
              >
                onSuccess
              </ColorSquare>
            </ColorSquares>
          </ColorVariable>
          <ColorVariable>
            <Title size="large">Warning</Title>
            <ColorSquares>
              <ColorSquare
                bg={theme.color.warning.normal}
                fg={theme.color.onWarning}
              >
                warning.normal
              </ColorSquare>
              <ColorSquare
                bg={theme.color.warning.light}
                fg={theme.color.onWarning}
              >
                warning.light
              </ColorSquare>
              <ColorSquare
                bg={theme.color.warning.dark}
                fg={theme.color.onWarning}
              >
                warning.dark
              </ColorSquare>
              <ColorSquare
                bg={theme.color.onWarning}
                fg={theme.color.warning.normal}
              >
                onWarning
              </ColorSquare>
            </ColorSquares>
          </ColorVariable>
          <ColorVariable>
            <Title size="large">Alert</Title>
            <ColorSquares>
              <ColorSquare
                bg={theme.color.error.normal}
                fg={theme.color.onError}
              >
                error.normal
              </ColorSquare>
              <ColorSquare
                bg={theme.color.error.light}
                fg={theme.color.onError}
              >
                error.light
              </ColorSquare>
              <ColorSquare bg={theme.color.error.dark} fg={theme.color.onError}>
                error.dark
              </ColorSquare>
              <ColorSquare
                bg={theme.color.onError}
                fg={theme.color.error.normal}
              >
                onError
              </ColorSquare>
            </ColorSquares>
          </ColorVariable>
          <ColorVariable>
            <Title size="large">Surface</Title>
            <ColorSquares>
              <ColorSquare
                bg={theme.color.surface}
                fg={theme.color.onSurface.normal}
              >
                surface
              </ColorSquare>
              <ColorSquare
                bg={theme.color.onSurface.normal}
                fg={theme.color.surface}
              >
                onSurface.normal
              </ColorSquare>
              <ColorSquare
                bg={theme.color.onSurface.subtle}
                fg={theme.color.surface}
              >
                onSurface.subtle
              </ColorSquare>
            </ColorSquares>
          </ColorVariable>
          <ColorVariable>
            <Title size="large">Background</Title>
            <ColorSquares>
              <ColorSquare
                bg={theme.color.background}
                fg={theme.color.onBackground.normal}
              >
                background
              </ColorSquare>
              <ColorSquare
                bg={theme.color.onBackground.normal}
                fg={theme.color.background}
              >
                onBackground.normal
              </ColorSquare>
              <ColorSquare
                bg={theme.color.onBackground.subtle}
                fg={theme.color.background}
              >
                onBackground.subtle
              </ColorSquare>
            </ColorSquares>
          </ColorVariable>
          <ColorVariable>
            <Title size="large">Border</Title>
            <ColorSquares>
              <ColorSquare
                bg={theme.color.border.normal}
                fg={theme.color.onSurface.normal}
              >
                border.normal
              </ColorSquare>
              <ColorSquare
                bg={theme.color.border.light}
                fg={theme.color.onSurface.normal}
              >
                border.light
              </ColorSquare>
              <ColorSquare
                bg={theme.color.border.dark}
                fg={theme.color.onSurface.normal}
              >
                border.dark
              </ColorSquare>
            </ColorSquares>
          </ColorVariable>
        </>
      )}
    </ThemeConsumer>
  );
};
