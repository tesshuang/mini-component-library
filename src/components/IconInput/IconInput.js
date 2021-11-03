import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    iconSize: 16,
    fontSize: 14,
    height: 24,
    borderThickness: 1,
  },
  large: {
    iconSize: 24,
    fontSize: 18,
    height: 36,
    borderThickness: 2,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];
  return (
    <Wrapper>
      <IconWrapper style={{ '--size':  `${styles.iconSize}px`}}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput 
        placeholder={placeholder}
        style={{ 
          '--paddingLeft': styles.iconSize + 6 + 'px',
          '--font': `${styles.fontSize}px`,
          '--width': `${width}px`,
          '--height': `${styles.height}px`,
          '--borderThickness': `${styles.borderThickness}px`,
        }}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  padding-left: var(--paddingLeft);
  color: inherit;
  font-size: var(--font);
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
