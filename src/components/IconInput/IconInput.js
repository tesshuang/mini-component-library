import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    iconSize: 16,
    fontSize: 14,
    paddingBottom: 4,
  },
  large: {
    iconSize: 24,
    fontSize: 18,
    paddingBottom: 6,
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
    <Wrapper
      width={width}
      style={{ '--paddingBottom':  `${SIZES[size].paddingBottom}px`}}>
      <IconWrapper style={{ '--size':  `${SIZES[size].iconSize}px`}}>
        <Icon id={icon} size={SIZES[size].iconSize} />
      </IconWrapper>
      <TextInput 
        placeholder={placeholder}
        style={{ 
          '--paddingLeft': SIZES[size].iconSize + 6 + 'px',
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
  padding-bottom: var(--paddingBottom);

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
`;

const TextInput = styled.input`
  width: 100%;
  border: none;
  padding-left: var(--paddingLeft);
  font-size: var(--font);

  &:focus {
    outline: none;
  }
`;

export default IconInput;
