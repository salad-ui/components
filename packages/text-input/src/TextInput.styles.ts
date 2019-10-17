import styled from 'styled-components';
import {body} from '@salad-ui/typography';
import {compact, fullWidth, borderedLabel} from '@salad-ui/utils';

export interface InputProps {
  isCompact?: boolean;
  isFullWidth?: boolean;
}

export const Input = styled.input<InputProps>`
  ${borderedLabel()}
  ${body()}
  ${compact}
  ${fullWidth}
`;
