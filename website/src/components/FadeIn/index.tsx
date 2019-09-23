import * as React from 'react';
import styled from 'styled-components';

const {useState, useEffect} = React;

const FadeIn: React.FC = (props = {}) => {
    const {children} = props;
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        window.requestAnimationFrame(() => {
            setReady(true);
        });
        return () => {
            setReady(false);
        };
    }, [setReady]);

    const classes = isReady ? 'is-ready' : '';

    return <FadeUI className={classes}>{children}</FadeUI>;
};

const FadeUI = styled.div`
  opacity: 0;
  transition-duration: 200ms;
  transition-delay: 0ms;
  transition-property: opacity;
  transition-timing-function: linear;

  &.is-ready {
    opacity: 1;
  }
`;

export default FadeIn;
