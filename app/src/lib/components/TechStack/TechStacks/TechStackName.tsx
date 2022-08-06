import styled from 'styled-components';
import { Icon } from '@iconify/react';

export interface TechStackNameType {
  name?: string;
  fontSize?: string;
  logoSize?: string;
}

const TechStackName = (props: TechStackNameType) => {
  const { name, fontSize, logoSize } = props;
  
  return (
    <NameContainer>
      <Icon icon={`logos:${name?.toLowerCase()}`} fontSize={logoSize} />
      <Name fontSize={fontSize}>{name}</Name>
    </NameContainer>
  );
};

export default TechStackName;

TechStackName.defaultProps = {
  name: 'name of skill',
  fontSize: '16px',
  logoSize: '24px'
};

const NameContainer = styled.div<{
  margin?: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${({ margin }) => margin ?? '10px 3px'};
`;

const Name = styled.span<{
  fontSize?: string;
}>`
  margin-left: 8px;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
`;
