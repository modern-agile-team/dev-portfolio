import styled from 'styled-components';
import { MAIN } from '../../../common/theme';
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
        (
          {
            title,
            itemTextColor,
            itemTextAlign,
            itemBackgroundColor,
            itemHoverdBackgroundColor,
          }: SideBarItemsElementType,
          idx
        ) => (
          <ItemContainer
            key={idx}
            itemTextColor={itemTextColor}
            itemTextAlign={itemTextAlign}
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
  background-color: ${({ itemBackgroundColor }) => itemBackgroundColor ?? MAIN.MAIN_COLOR};
  padding: 0.2em 1em;
  margin: 1px;
  text-decoration: none;
  text-align: ${({ itemTextAlign }) => itemTextAlign ?? 'center'};
  border-radius: 4px;
  &:hover {
    background-color: ${({ itemHoverdBackgroundColor }) => itemHoverdBackgroundColor ?? 'whitesmoke'};
  }
`;

const Item = styled.div<SideBarItemsStyledPropsType>`
  margin: ${({ margin }) => margin ?? '10px 0px'};
`;
