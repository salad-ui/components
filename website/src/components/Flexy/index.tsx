import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const Flexy: React.FC<any> = (props = {} as any) => {
  const {align, className, justify, ...additionalProps} = props;
  const classes = classnames(className, align && `is-${align}`);

  return <FlexyUI {...additionalProps} className={classes} justify={justify} />;
};

Flexy.defaultProps = {
  align: 'center',
  justify: 'space-between',
};

const FlexyUI = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({justify}) => `
    justify-content: ${justify};
  `}

  &.is-top {
    align-items: flex-start;
  }
  &.is-center,
  &.is-middle {
    align-items: center;
  }
  &.is-bottom {
    align-items: flex-end;
  }

  & > * {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Item = styled.div`
  min-width: 0;
  min-height: 0;
`;

const Block = styled.div`
  min-width: 0;
  min-height: 0;
  flex: 1;
`;

Flexy.Item = Item;
Flexy.Block = Block;

export default Flexy;
