import styled, { keyframes } from 'styled-components';
import SideBarItems from './SideBarItems';
import {
  SideBarPropsType,
  SideBarStyledPropsType,
  SideBarBackgroundStyledPropsType,
} from '../../../common/types/ComponentTypes/Header/SideBar/SideBarType';
import { MAIN } from '../../../common/theme';

const SideBar = ({
  mainTitle,
  mainTitleSize,
  mainTitleColor,
  mainTitleAlign,
  sideBarItems,
  isClickedSideBarIcon,
  backgroundColor,
  mainTitleBorderColor,
  setIsClickedSideBarIcon,
}: SideBarPropsType) => {
  return (
    <>
      <Container isClickedSideBarIcon={isClickedSideBarIcon} backgroundColor={backgroundColor}>
        <MainTitle mainTitleSize={mainTitleSize} mainTitleColor={mainTitleColor} mainTitleAlign={mainTitleAlign}>
          {mainTitle}
        </MainTitle>
        <Line mainTitleBorderColor={mainTitleBorderColor} />
        <SideBarItems setIsClickedSideBarIcon={setIsClickedSideBarIcon} sideBarItems={sideBarItems} />
      </Container>
      <Background isClickedSideBarIcon={isClickedSideBarIcon} onClick={() => setIsClickedSideBarIcon(false)} />
    </>
  );
};

export default SideBar;

const Container = styled.div<SideBarStyledPropsType>`
  position: absolute;
  top: 0%;
  right: ${({ isClickedSideBarIcon }) => (isClickedSideBarIcon ? '0%' : '-40%')};
  z-index: 1011;
  width: 30%;
  max-width: 280px;
  padding: 16px;
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : MAIN.MAIN_COLOR)};
  border-radius: 10px 0px 10px 10px;
  animation: 0.3s ${({ isClickedSideBarIcon }) => (isClickedSideBarIcon ? showUp : showOut)};
`;

const Background = styled.div<SideBarBackgroundStyledPropsType>`
  display: ${({ isClickedSideBarIcon }) => (isClickedSideBarIcon ? 'block' : 'none')};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1010;
  background-color: rgba(0, 0, 0, 0.65);
`;

const MainTitle = styled.div<SideBarStyledPropsType>`
  padding: 0.2em 1em;
  font-size: ${({ mainTitleSize }) => mainTitleSize ?? '20px'};
  text-align: ${({ mainTitleAlign }) => mainTitleAlign ?? 'center'};
  color: ${({ mainTitleColor }) => mainTitleColor ?? 'white'};
`;

const Line = styled.hr<SideBarStyledPropsType>`
  border: 0.05px solid ${({ mainTitleBorderColor }) => mainTitleBorderColor ?? 'white'};
`;

const showUp = keyframes`
  from {
    right: -40%;
  }
  to {
    right: 0%;
  }
`;

const showOut = keyframes`
  from {
    right: 0%;
  }
  to {
    right: -40%;
  }
`;
