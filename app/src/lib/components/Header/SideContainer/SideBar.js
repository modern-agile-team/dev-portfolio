import React from "react";
import styled, { keyframes } from "styled-components";

import SideBarItems from "./SideBarItems";

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

const Container = styled.div`
  position: absolute;
  top: 0%;
  right: ${({ isClickedSideBarIcon }) =>
    isClickedSideBarIcon ? "0%" : "-40%"};
  z-index: 1011;
  width: 30%;
  max-width: 280px;
  padding: 16px;
  background-color: white;
  border-radius: 10px 0px 10px 10px;
  animation: 0.3s
    ${({ isClickedSideBarIcon }) => (isClickedSideBarIcon ? showUp : showOut)};
`;

const Background = styled.div`
  display: ${({ isClickedSideBarIcon }) =>
    isClickedSideBarIcon ? "block" : "none"};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1010;
  background-color: rgba(0, 0, 0, 0.65);
`;

const MainTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Line = styled.hr`
  border: 0.05px solid #00000022;
`;

const SideBar = ({
  mainTitle,
  sideBarItems,
  isClickedSideBarIcon,
  setIsClickedSideBarIcon,
}) => {
  return (
    <>
      <Container isClickedSideBarIcon={isClickedSideBarIcon}>
        <MainTitle>{mainTitle}</MainTitle>
        <Line />
        <SideBarItems
          setIsClickedSideBarIcon={setIsClickedSideBarIcon}
          sideBarItems={sideBarItems}
        />
      </Container>

      <Background
        isClickedSideBarIcon={isClickedSideBarIcon}
        onClick={() => setIsClickedSideBarIcon(false)}
      />
    </>
  );
};

export default SideBar;
