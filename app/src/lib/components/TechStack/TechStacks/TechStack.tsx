import React from 'react';
import styled, { css } from 'styled-components';
import TechStackName from './TechStackName';
import ProgressBarContainer from './ProgressBar';

interface TechStackType {
  nameOption: { name?: string; size?: string; iconColor?: string };
  progressBarOption: { rate?: string; colorTo?: string; colorFrom?: string };
  gap?: 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider';
}

const TechStack = (props: TechStackType) => {
  const { nameOption, progressBarOption, gap = 'normal' } = props;

  return (
    <Wrapper gap={gap}>
      <TechStackName {...nameOption} />
      <ProgressBarContainer {...progressBarOption} />
    </Wrapper>
  );
};

export default TechStack;

TechStack.defaultProps = {
  gap: 'normal',
};

const Wrapper = styled.div<{
  gap?: any;
}>`
  ${({ gap }) => {
    switch (gap) {
      case 'narrower':
        return css`
          margin: 0px 30px;
        `;
      case 'narrow':
        return css`
          margin: 10px 30px;
        `;
      case 'normal':
        return css`
          margin: 20px 30px;
        `;
      case 'wide':
        return css`
          margin: 30px 30px;
        `;
      case 'wider':
        return css`
          margin: 40px 30px;
        `;
    }
  }}
`;
