import styled from 'styled-components';
import {
  SideBarItemsPropsType,
  SideBarItemsElementType,
  SideBarItemsStyledPropsType,
} from '../../../common/types/ComponentTypes/Header/SideBar/SideBarItemsType';

const SideBarItems = ({ sideBarItems, setIsClickedSideBarIcon }: SideBarItemsPropsType) => {
  return (
    <>
      {sideBarItems.map(({ title }: SideBarItemsElementType, idx) => (
        <ItemContainer
          key={idx}
          onClick={() => {
            setIsClickedSideBarIcon(false);
            document.getElementById(title)?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Item>{title}</Item>
        </ItemContainer>
      ))}
    </>
  );
};

export default SideBarItems;

const ItemContainer = styled.div`
  color: ${({ color }) => color ?? 'black'};
  text-decoration: none;
`;

const Item = styled.div<SideBarItemsStyledPropsType>`
  cursor: pointer;
  margin: ${({ margin }) => margin ?? '10px 0px'};
`;
