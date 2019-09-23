import * as React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import Flexy from '../Flexy';
import WordPressLogo from '../WordPressLogo';

export const SiteFooter: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <Wrapper>
            <Container>
                <Flexy justify="center">
                    <Flexy.Item>
                        <LogoWrapper>
                            <WordPressLogo />
                        </LogoWrapper>
                    </Flexy.Item>
                    <Flexy.Item>
                        <Text>&copy; {year}. Code is Poetry.</Text>
                    </Flexy.Item>
                </Flexy>
            </Container>
        </Wrapper>
    );
};

export default SiteFooter;

const Wrapper = styled.div`
  background: #f8f8f8;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 4em 0;
  font-size: 0.9rem;
`;

const LogoWrapper = styled.div`
  opacity: 0.3;
`;

const Text = styled.span`
  opacity: 0.5;
`;
