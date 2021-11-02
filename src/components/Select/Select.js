import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  border:none;
  appearance: none;
  -webkit-appearance: none;
  padding: 12px 16px;

  &:hover {
    color: ${COLORS.black};
  }

  &::after {
    content: ${<Icon id="chevron-down" size="12" />};
    /* content: '◀'; */
    margin-right: 16px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
    right: 16px;
`;

export default Select;
