import * as React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Flexy from '../Flexy';
import Container from '../Container';

export const HeroHome: React.FC = () => {
  return (
    <HeroBase>
      <Container>
        <Title>An Open Design System for WordPress and Beyond</Title>
        <Flexy justify="center">
          <Flexy.Item>
            <Button size="lg" variant="primary" to="/get-started">
              Get Started
            </Button>
          </Flexy.Item>
          <Flexy.Item>
            <Button
              size="lg"
              href="https://github.com/Automattic/wordpress-components"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </Button>
          </Flexy.Item>
        </Flexy>
      </Container>
    </HeroBase>
  );
};

const HeroBase = styled.div`
  padding: 8em 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.2;
`;

export default HeroHome;
