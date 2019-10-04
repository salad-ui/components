import * as React from 'react';
import {Button} from '@salad-ui/button';
import {
  Wrapper,
  LogoLine,
  LogoText,
  TitleLine,
  SubtitleLine,
} from './index.style';

export const HeroPanel: React.FC = () => (
  <Wrapper>
    <LogoLine>
      <span role="img" aria-label="bowl of salad emoji">
        🥗
      </span>{' '}
      <LogoText>salad-ui</LogoText>
    </LogoLine>
    <TitleLine>A Design System for WordPress admin</TitleLine>
    <SubtitleLine>
      <code>salad-ui</code> is a set of design principles and code components
      for building rich user interfaces within WordPress admin.
    </SubtitleLine>
    <Button variant="primary" href="/components">
      Get started
    </Button>{' '}
    <Button variant="secondary" href="/components">
      Browse components
    </Button>
  </Wrapper>
);
