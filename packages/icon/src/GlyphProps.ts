import {IconProps} from './Icon';

export interface GlyphProps extends IconProps {
  role?: string;
  'aria-hidden'?: boolean;
  'aria-labeledby'?: string;
  'aria-describedby'?: string;
  className?: string;
}
