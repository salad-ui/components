import styled from 'styled-components';
import {body} from '@salad-ui/typography';
import {get, color} from '@salad-ui/color';
import {Triangle} from '@salad-ui/icon';
import {mr, pl, pr} from '@salad-ui/spacing';
import {compact, fullWidth, borderedLabel} from '@salad-ui/utils';

export interface SelectProps {
  isCompact?: boolean;
  isInvalid?: boolean;
  isFullWidth?: boolean;
}
export const Wrapper = styled.div<SelectProps>`
  display: inline-flex;
  position: relative;
  vertical-align: middle;
  ${fullWidth}
`;

export const Select = styled.select<SelectProps>`
  ${borderedLabel()}
  ${pl(2)}
  ${pr(4)}
  ${body()}
  ${compact}
  ${fullWidth}

  :focus {
    outline: none;
  }

  :-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 ${get('onSurface.main')};
  }
  &[aria-invalid="true"]:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 ${get('error.main')};
  }
`;

export const Arrow = styled(Triangle)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  ${mr(1)}
  ${color('onSurface.main')}
`;
