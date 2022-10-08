import styled from 'styled-components';
import { Icon } from '@iconify/react';
import {
  SideBarItemsPropsType,
  SideBarItemsElementType,
  SideBarItemsStyledPropsType,
  SideBarItemsElementStyledType,
} from '../../../common/types/ComponentTypes/Header/SideBar/SideBarItemsType';
import { uuidv4 } from '../../../common/utils';

const SideBarItems = ({ sideBarItems, setIsClickedSideBarIcon }: SideBarItemsPropsType) => {
  return (
    <>
      {sideBarItems.map(
        ({
          tagId,
          title,
          itemTextColor,
          itemTextAlign,
          itemBackgroundColor,
          itemHoverdBackgroundColor,
          itemLogoName,
        }: SideBarItemsElementType) => (
          <ItemContainer
            key={uuidv4()}
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
  color: ${({ itemTextColor }) => itemTextColor};
  background-color: ${({ itemBackgroundColor }) => itemBackgroundColor};
  padding: 0.2em 1em;
  margin: 1px;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-color: ${({ itemHoverdBackgroundColor }) => itemHoverdBackgroundColor};
  }
`;

const Item = styled.div<SideBarItemsStyledPropsType>`
  display: flex;
  align-items: center;
  justify-content: ${({ itemTextAlign }) => itemTextAlign};
  margin: ${({ margin }) => margin ?? '10px 0px'};
`;

const IconContainer = styled.div`
  margin-right: 10px;
`;
