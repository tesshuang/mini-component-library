/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    padding: 0,
  },
  medium: {
    height: 12,
    padding: 0,
  },
  large: {
    height: 24,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  return( 
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ '--padding': `${SIZES[size].padding}px`}}>
        <InnerWrapper>
          <Inner 
            style={{ 
              '--height': `${SIZES[size].height}px`, 
              '--width': `${value}%`
            }}/>
        </InnerWrapper>
      <VisuallyHidden>The progressbar value is {value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: 8px;
`;

const InnerWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

const Inner = styled.div`
  background: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
  border-radius: '4px 0px 0px 4px';
`;

export default ProgressBar;
