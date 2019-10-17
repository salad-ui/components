import {css} from 'styled-components';
import {color, borderColor, backgroundColor} from '@salad-ui/color';
import {px, py} from '@salad-ui/spacing';

export const disabledCursor = () => `cursor: not-allowed;`;

export const focusOutline = () => {
  return `
    outline: none;
    box-shadow: 0 0 0 2px #72AEE6;
  `;
};

export const compact = ({isCompact}: {isCompact?: boolean}) =>
  isCompact ? `height: 32px;` : `height: 40px;`;

export const fullWidth = ({isFullWidth}: {isFullWidth?: boolean}) =>
  isFullWidth ? `width: 100%;` : undefined;

export const borderedLabel = () => css`
  appearance: none;
  display: inline-flex;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  ${py(0)}
  ${px(2)}
  ${color('onSurface.main')}
  ${borderColor('border.main')}
  ${backgroundColor('surface')}
  
  :hover:enabled {
    ${borderColor('border.dark')}
  }
  
  :focus {
    ${focusOutline()}
  }

  :disabled {
    ${disabledCursor}
  }

  &[aria-invalid="true"] {
    ${color('error.main')}
    ${borderColor('error.main')}
  }

  &[aria-invalid="true"]:hover:enabled {
    ${color('error.dark')}
    ${borderColor('error.dark')}
  }

`;
