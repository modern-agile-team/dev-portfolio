import React from 'react';
import styled from 'styled-components';
import { FaBars } from '../../../dependencies/react-icons/fa';

interface SideBarIconProps {
  styles: any;
  onClick: () => void;
}

const Container = styled.div<{
  margin: string;
}>`
  cursor: pointer;
  margin: ${({ margin }) => margin ?? '0px 12px 0px 24px'};
  border: 0px;
`;

const SideBarIcon = ({ styles, onClick }: SideBarIconProps) => {
  const { size, margin } = styles;

  return (
    <Container margin={margin} onClick={onClick}>
      <FaBars fontSize={size} />
    </Container>
  );
};

export default SideBarIcon;
