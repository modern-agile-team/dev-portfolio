import React from 'react';
import TechStack from './TechStack';

interface TechStackListType {
  id?: string;
  techStackList: {
    nameOption: { name?: string; size?: string; iconColor?: string };
    progressBarOption: { rate?: string; colorTo?: string; colorFrom?: string };
  }[];
  gap?: 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider';
}

const TechStackList = ({ id, techStackList, gap = 'normal' }: TechStackListType) => {
  return (
    <div id={id}>
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
