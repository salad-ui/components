import * as React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Container from '../Container';
import Flexy from '../Flexy';
import WordPressLogo from '../WordPressLogo';

export const HeroHome: React.FC = () => {
  return (
    <HeroBase>
      <Container>
        <Content>
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
                href="https://github.com/jameslnewell/design-system-example"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </Button>
            </Flexy.Item>
          </Flexy>
        </Content>
        <LogoGraphic>
          <WordPressLogo width={400} />
        </LogoGraphic>
      </Container>
    </HeroBase>
  );
};

const HeroBase = styled.div`
  padding: calc(30vh - 1em) 0 8em;
  position: relative;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.2;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const LogoGraphic = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: -1em;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    z-index: 0;
    height: 40%;
    background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1),
      white
    );
    width: 100%;
    bottom: 0;
    left: 0;
  }

  svg {
    opacity: 0.03;
  }
`;

export default HeroHome;
