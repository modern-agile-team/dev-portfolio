import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

interface SideBarIconProps {
  size?: string;
  margin?: string;
  onClick: () => void;
}

const Container = styled.div<{
  margin: string;
}>`
  cursor: pointer;
  margin: ${({ margin }) => margin ?? '0px 12px 0px 24px'};
  border: 0px;
`;

const SideBarIcon = ({ size = '50px', margin = '0px 12px 0px 24px', onClick }: SideBarIconProps) => {

  return (
    <Container margin={margin} onClick={onClick}>
      <FaBars fontSize={size} />
    </Container>
  );
};

export default SideBarIcon;
