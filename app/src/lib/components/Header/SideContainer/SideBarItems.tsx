import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  color: ${({ color }) => color ?? 'black'};
  text-decoration: none;
`;

const Item = styled.div<{
  margin?: any;
}>`
  cursor: pointer;
  margin: ${({ margin }) => margin ?? '10px 0px'};
`;

const SideBarItems = ({ sideBarItems, setIsClickedSideBarIcon }: any) => {
  return sideBarItems?.map(({ title, idx }: any) => (
    <ItemContainer
      key={idx}
      onClick={() => {
        setIsClickedSideBarIcon(false);
        document.getElementById(title)?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <Item>{title}</Item>
    </ItemContainer>
  ));
};

export default SideBarItems;
