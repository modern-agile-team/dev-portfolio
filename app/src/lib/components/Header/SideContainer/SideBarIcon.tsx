import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import {
  SideBarIconPropsType,
  SideBarIconStyledPropsType,
} from '../../../common/types/ComponentTypes/Header/SideBar/SideBarIconType';

const Container = styled.div<SideBarIconStyledPropsType>`
  cursor: pointer;
  margin: ${({ iconMargin }) => iconMargin ?? '0px 12px 0px 24px'};
  border: 0px;
`;

const SideBarIcon = ({
  iconSize = '30px',
  iconColor = '#434521',
  iconMargin = '0px 12px 0px 24px',
  onClick,
}: SideBarIconPropsType) => {
  return (
    <Container iconMargin={iconMargin} onClick={onClick}>
      <FaBars fontSize={iconSize} color={iconColor} />
    </Container>
  );
};

export default SideBarIcon;
