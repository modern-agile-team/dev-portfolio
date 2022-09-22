import styled from 'styled-components';
import {
  SideBarItemsPropsType,
  SideBarItemsElementType,
  SideBarItemsStyledPropsType,
  SideBarItemsElementStyledType,
} from '../../../common/types/ComponentTypes/Header/SideBar/SideBarItemsType';

const SideBarItems = ({ sideBarItems, setIsClickedSideBarIcon }: SideBarItemsPropsType) => {
  return (
    <>
      {sideBarItems.map(
        ({ title, itemTextColor, itemBackgroundColor, itemHoverdBackgroundColor }: SideBarItemsElementType, idx) => (
          <ItemContainer
            key={idx}
            itemTextColor={itemTextColor}
            itemBackgroundColor={itemBackgroundColor}
            itemHoverdBackgroundColor={itemHoverdBackgroundColor}
            onClick={() => {
              setIsClickedSideBarIcon(false);
              document.getElementById(title)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Item>{title}</Item>
          </ItemContainer>
        )
      )}
    </>
  );
};

export default SideBarItems;

const ItemContainer = styled.div<SideBarItemsElementStyledType>`
  cursor: pointer;
  color: ${({ itemTextColor }) => itemTextColor ?? 'black'};
  background-color: ${({ itemBackgroundColor }) => itemBackgroundColor ?? 'white'};
  padding: 0.2em 1em;
  margin: 1px;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-color: ${({ itemHoverdBackgroundColor }) => itemHoverdBackgroundColor ?? 'whitesmoke'};
  }
`;

const Item = styled.div<SideBarItemsStyledPropsType>`
  margin: ${({ margin }) => margin ?? '10px 0px'};
`;
