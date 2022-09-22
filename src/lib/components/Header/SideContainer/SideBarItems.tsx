import styled from 'styled-components';
import { Icon } from '@iconify/react';
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
            tagId,
            title,
            itemTextColor,
            itemTextAlign,
            itemBackgroundColor,
            itemHoverdBackgroundColor,
            itemLogoName,
          }: SideBarItemsElementType,
          idx
        ) => (
          <ItemContainer
            key={idx}
            itemTextColor={itemTextColor}
            itemBackgroundColor={itemBackgroundColor}
            itemHoverdBackgroundColor={itemHoverdBackgroundColor}
            onClick={() => {
              setIsClickedSideBarIcon(false);
              document.getElementById(tagId as string)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Item itemTextAlign={itemTextAlign}>
              <IconContainer>
                <Icon icon={itemLogoName ?? ''} />
              </IconContainer>
              {title}
            </Item>
          </ItemContainer>
        )
      )}
    </>
  );
};

export default SideBarItems;

const ItemContainer = styled.div<SideBarItemsElementStyledType>`
  cursor: pointer;
  color: ${({ itemTextColor }) => itemTextColor ?? 'white'};
  background-color: ${({ itemBackgroundColor }) => itemBackgroundColor ?? MAIN.MAIN_COLOR};
  padding: 0.2em 1em;
  margin: 1px;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-color: ${({ itemHoverdBackgroundColor }) => itemHoverdBackgroundColor ?? 'black'};
  }
`;

const Item = styled.div<SideBarItemsStyledPropsType>`
  display: flex;
  align-items: center;
  justify-content: ${({ itemTextAlign }) => itemTextAlign ?? 'left'};
  margin: ${({ margin }) => margin ?? '10px 0px'};
`;

const IconContainer = styled.div`
  margin-right: 10px;
`;
