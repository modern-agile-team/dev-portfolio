import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../dependencies/@iconify/react/dist/iconify';

interface TechStackNameType {
  nameOption: {
    name: string;
    iconColor: string;
    size: string;
  };
}

const TechStackName = ({ nameOption }: TechStackNameType) => {
  const { name, iconColor, size } = nameOption;

  return (
    <NameContainer>
      <Icon icon={`simple-icons:${name.toLowerCase()}`} color={iconColor} fontSize={size} />
      <Name>{name}</Name>
    </NameContainer>
  );
};

export default TechStackName;

const NameContainer = styled.div<{
  margin?: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${({ margin }) => margin ?? '10px 3px'};
`;

const Name = styled.span`
  margin-left: 8px;
  font-weight: bold;
`;
