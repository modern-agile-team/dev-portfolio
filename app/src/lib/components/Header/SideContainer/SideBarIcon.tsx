import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import {
  SideBarIconPropsType,
  SideBarIconStyledPropsType,
} from '../../../common/types/ComponentTypes/Header/SideBarType';

const Container = styled.div<SideBarIconStyledPropsType>`
  cursor: pointer;
  margin: ${({ iconMargin }) => iconMargin ?? '0px 12px 0px 24px'};
  border: 0px;
`;

const SideBarIcon = ({ iconSize = '50px', iconMargin = '0px 12px 0px 24px', onClick }: SideBarIconPropsType) => {
  return (
    <Container iconMargin={iconMargin} onClick={onClick}>
      <FaBars fontSize={iconSize} />
    </Container>
  );
};

export default SideBarIcon;
