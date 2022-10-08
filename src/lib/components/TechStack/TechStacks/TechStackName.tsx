import styled from 'styled-components';
import { Icon } from '@iconify/react';
import {
  TechStackNamePropsType,
  TechStackNameContainerStyledPropsType,
} from '../../../common/types/ComponentTypes/TechStack/TechStackNameType';

const TechStackName = ({ name, logoName, fontSize, logoSize, nameTextColor }: TechStackNamePropsType) => {
  return (
    <NameContainer>
      <Icon icon={`logos:${logoName?.toLowerCase()}`} fontSize={logoSize} />
      <Name fontSize={fontSize} nameTextColor={nameTextColor}>
        {name}
      </Name>
    </NameContainer>
  );
};

export default TechStackName;

TechStackName.defaultProps = {
  name: 'Tech-name that will be shown to other users',
  logoName: 'javascript',
  fontSize: '16px',
  logoSize: '24px',
  nameTextColor: 'black',
};

const NameContainer = styled.div<TechStackNameContainerStyledPropsType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${({ margin }) => margin ?? '10px 3px'};
`;

const Name = styled.span<TechStackNamePropsType>`
  margin-left: 8px;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  color: ${({ nameTextColor }) => nameTextColor};
`;
