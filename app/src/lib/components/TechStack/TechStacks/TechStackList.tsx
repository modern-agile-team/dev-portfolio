import React from 'react';
import TechStack from './TechStack';

interface TechStackListType {
  techStackList: {
    nameOption: { name?: string; size?: string; iconColor?: string };
    progressBarOption: { rate?: string; colorTo?: string; colorFrom?: string };
  }[];
}

const TechStackList = ({ techStackList }: TechStackListType) => {
  return (
    <div id="TechStacks">
      {techStackList?.map(({ nameOption, progressBarOption }, idx) => (
        <TechStack key={idx} nameOption={nameOption} progressBarOption={progressBarOption} />
      ))}
    </div>
  );
};

export default TechStackList;
