import React from 'react';
import TechStack from './TechStack';

interface TechStackListType {
  techStackList: {
    nameOption: { name?: string; size?: string; iconColor?: string };
    progressBarOption: { rate?: string; colorTo?: string; colorFrom?: string };
  }[];
  gap?: 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider';
}

const TechStackList = ({ techStackList, gap = 'normal' }: TechStackListType) => {
  return (
    <div id="TechStacks">
      {techStackList?.map(({ nameOption, progressBarOption }, idx) => (
        <TechStack key={idx} nameOption={nameOption} progressBarOption={progressBarOption} gap={gap} />
      ))}
    </div>
  );
};

export default TechStackList;

TechStackList.defaultProps = {
  gap: 'normal',
};
