import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    iconSize: 16,
    fontSize: 14,
  },
  large: {
    iconSize: 24,
    fontSize: 18,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper width={width}>
      <IconWrapper style={{ '--size':  `${SIZES[size].iconSize}px`}}>
        <Icon id={icon} size={SIZES[size].iconSize} />
      </IconWrapper>
      <TextInput 
        placeholder={placeholder}
        style={{ 
          '--padding': SIZES[size].iconSize + 6 + 'px',
          '--font': `${SIZES[size].fontSize}px`
        }}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border-bottom: 2px solid ${COLORS.black};
  width: ${p => p.width}px;
  padding-bottom: 4px;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
`;

const TextInput = styled.input`
  width: 100%;
  border: none;
  padding-left: var(--padding);
  font-size: var(--font);
`;

export default IconInput;
