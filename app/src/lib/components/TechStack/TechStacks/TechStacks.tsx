import React from 'react';
import styled from 'styled-components';

import TechStackName from './TechStackName';
import ProgressBarContainer from './ProgressBar';

const Container = styled.div``;

const TechStack = styled.div<{
  margin?: any;
}>`
  margin: ${({ margin }) => margin ?? '10px 30px'};
`;

const techStacksDefault = [
  {
    nameOption: { name: 'Javascript', size: '24px', iconColor: '#E2D784' },
    progressBarOption: { rate: '45%' },
  },
  {
    nameOption: { name: 'HTML5', size: '24px', iconColor: '#E34F26' },
    progressBarOption: { rate: '30%' },
  },
  {
    nameOption: { name: 'Nodejs', size: '24px', iconColor: '#339933' },
    progressBarOption: {
      rate: '85%',
      colorTo: '#339933',
      colorFrom: 'whitesmoke',
    },
  },
];

const TechStacks = ({ techStacks = techStacksDefault }) => {
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
