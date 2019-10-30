import styled, {css} from 'styled-components';
import {get, color, backgroundColor} from '@salad-ui/color';
import {p} from '@salad-ui/spacing';
import {button} from '@salad-ui/typography';

export interface WrapperProps {
  isActive?: boolean;
}

const activeStyle = ({isActive}: WrapperProps) => {
  const style = css`
    ${color('secondary.main')}
    box-shadow: inset 0 -2px 0 0 ${get('secondary.main')};
  `;
  if (isActive) {
    return style;
  } else {
    return css`
      ${color('onSurface.main')}
      box-shadow: inset 0 -1px 0 0 ${get('border.main')};

      /* FIXME: https://github.com/ReactTraining/react-router/issues/7013 */
      &.is-active {
        ${style}
      }
    `;
  }
};

export const Wrapper = styled.div<WrapperProps>`
  ${p(2)}
  ${button()}
  ${backgroundColor('surface')}
  ${activeStyle}
  display: inline-flex;
  align-items: center;
  border: none;
  cursor: pointer;
  /* fix on chrome */
  line-height: 1;
  text-decoration: none;
`;
