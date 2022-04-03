import React from 'react';
import styled from 'styled-components';

import TechStackName from './TechStackName';
import ProgressBarContainer from './ProgressBar';

interface TechStackListType {
  teckStackList: {
    nameOption?: { name?: string; size?: string; iconColor?: string };
    progressBarOption?: { rate?: string; colorTo?: string; colorFrom?: string };
  }[];
}

const TechStackList = ({ teckStackList }: TechStackListType) => {
  return (
    <div id="TechStacks">
      {teckStackList?.map(({ nameOption, progressBarOption }, idx) => (
        <TechStack key={idx}>
          <TechStackName {...nameOption} />
          <ProgressBarContainer {...progressBarOption} />
        </TechStack>
      ))}
    </div>
  );
};

export default TechStackList;

const TechStack = styled.div<{
  margin?: any;
}>`
  margin: ${({ margin }) => margin ?? '10px 30px'};
`;
