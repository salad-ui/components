import * as React from 'react';
import {AvatarSize} from './types';
import {Image, ImageButton} from './index.style';

export interface AvatarProps {
  src: string;
  alt: string;
  size?: AvatarSize;
  onClick?: () => void;
}

// TODO: use `react-render-image` and handle the image 404ing

export const Avatar: React.FC<AvatarProps> = ({
  alt: label,
  src: url,
  size,
  onClick,
}) => {
  if (onClick) {
    return <ImageButton type="image" src={url} alt={label} $size={'small'} />;
  } else {
    return <Image src={url} alt={label} $size={size} />;
  }
};
