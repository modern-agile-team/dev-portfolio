import React from 'react';
import styled from 'styled-components';

import TechStackName from './TechStackName';
import ProgressBarContainer from './ProgressBar';

interface Props {
  techStacks: {
    nameOption: { name: string; size: string; iconColor: string };
    progressBarOption: { rate: string; colorTo?: string; colorFrom?: string };
  }[];
}

const TechStacks = ({ techStacks }: Props) => {
  return (
    <Container id="TechStacks">
      {techStacks?.map(({ nameOption, progressBarOption }, idx) => (
        <TechStack key={idx}>
          <TechStackName nameOption={nameOption} />
          <ProgressBarContainer progressBarOption={progressBarOption} />
        </TechStack>
      ))}
    </Container>
  );
};

export default TechStacks;

const Container = styled.div``;

const TechStack = styled.div<{
  margin?: any;
}>`
  margin: ${({ margin }) => margin ?? '10px 30px'};
`;
