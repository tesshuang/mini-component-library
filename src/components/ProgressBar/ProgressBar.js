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
      style={{ '--padding': `${SIZES[size].padding}px`}}
      >
      <Inner 
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ '--height': `${SIZES[size].height}px`, '--width': `${value}%`}}
        />
      <VisuallyHidden>The progressbar value is {value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  overflow: hidden;
  padding: var(--padding);
`;

const Inner = styled.div`
  background: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
  border-radius: ${p =>  p.value >= 100? '4px' : '4px 0px 0px 4px'} ;
`;

export default ProgressBar;
