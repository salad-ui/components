import * as React from 'react';
import {Body, Title} from '@salad-ui/typography';
import {HeroPanel} from './HeroPanel';

export const HeroHome: React.FC = () => {
  return (
    <>
      <HeroPanel />

      <div>
        <div>What is it?</div>- opinionated - cohesive - composible - accessible
        - consistent - built with react - themable - fast
      </div>

      <div>
        <div>Who is it for?</div>
        <Title size="small">salad-ui is for users!</Title>
        <Body>salad-ui aims to </Body>
        <Title size="small">
          salad-ui is for designers, developers and plugin authors!
        </Title>
        <Body></Body>
      </div>
    </>
  );
};

export default HeroHome;
