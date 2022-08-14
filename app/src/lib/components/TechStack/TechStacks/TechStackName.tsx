import styled from 'styled-components';
import { Icon } from '@iconify/react';
import {
  TechStackNamePropsType,
  TechStackNameContainerStyledPropsType,
  TechStackNameStyledPropsType,
} from '../../../common/types/ComponentTypes/TechStack/TechStackNameType';

const TechStackName = ({ name, logoName, fontSize, logoSize }: TechStackNamePropsType) => {
  return (
    <NameContainer>
      <Icon icon={`logos:${logoName?.toLowerCase()}`} fontSize={logoSize} />
      <Name fontSize={fontSize}>{name}</Name>
    </NameContainer>
  );
};

export default TechStackName;

TechStackName.defaultProps = {
  name: 'name of skill',
  logoName: 'javascript',
  fontSize: '16px',
  logoSize: '24px',
};

const NameContainer = styled.div<TechStackNameContainerStyledPropsType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${({ margin }) => margin ?? '10px 3px'};
`;

const Name = styled.span<TechStackNameStyledPropsType>`
  margin-left: 8px;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
`;
