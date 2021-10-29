/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px'
  },
  medium: {
    '--height': '12px'
  },
  large: {
    '--height': '24px'
  },
};

const ProgressBar = ({ value, size }) => {
  return( 
    <Wrapper>
      <Inner 
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        value={value}
        style={SIZES[size]}
        />
      <VisuallyHidden>The progressbar value is {value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  padding: 4px;
`;

const Inner = styled.div`
  background: ${COLORS.primary};
  height: var(--height);
  width: ${p =>  p.value > 100 ? '100%' : `${p.value}%`};
  border-radius: ${p =>  p.value >= 100? '4px' : '4px 0px 0px 4px'} ;
`;

export default ProgressBar;
