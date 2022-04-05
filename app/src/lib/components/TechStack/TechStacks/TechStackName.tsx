import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../dependencies/@iconify/react/dist/iconify';

interface TechStackNameType {
  name?: string;
  iconColor?: string;
  size?: string;
}

const TechStackName = (props: TechStackNameType) => {
  const { name = 'name of skill', iconColor = 'black', size = '16px' } = props;

  return (
    <NameContainer>
      <Icon icon={`logos:${name.toLowerCase()}`} color={iconColor} fontSize={size} />
      <Name>{name}</Name>
    </NameContainer>
  );
};

export default TechStackName;

TechStackName.defaultProps = {
  name: 'name of skill',
  iconColor: 'black',
  size: '16px',
};

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
