import { useState } from 'react';
import styled from 'styled-components';
import Channels from '../Channels/Channels';
import SideBarIcon from './SideContainer/SideBarIcon';
import SideBar from './SideContainer/SideBar';
import { SideContainerPropsType } from '../../common/types/ComponentTypes/Header/SideContainerType';
import { SideBarOptionPropsType } from '../../common/types/ComponentTypes/Header/SideBar/SideBarType';

const SideContainer = ({ channels, sideBarOption = {} }: SideContainerPropsType) => {
  const {
    mainTitle,
    mainTitleSize,
    mainTitleColor,
    mainTitleAlign,
    mainTitleBorderColor,
    backgroundColor,
    iconName,
    iconSize,
    iconColor,
    iconMargin,
    itemTextColor,
    itemTextAlign,
    itemBackgroundColor,
    itemHoverdBackgroundColor,
  }: SideBarOptionPropsType = sideBarOption;

  const [isClickedSideBarIcon, setIsClickedSideBarIcon] = useState(false);
  const [sideBarItems, setSideBarItems] = useState([{}]);

  const onClickSideBarIconHandler = () => {
    const $tags: any = document.querySelector('.App')?.childNodes;

    setSideBarItems(
      Array.from($tags).reduce((result: any[], $tag: any) => {
        const tagId = $tag.id;
        let [title, itemLogoName] = [undefined, undefined];
        try {
          [title, itemLogoName] = eval(tagId);
        } catch (err) {
          [title, itemLogoName] = [tagId, undefined];
        }

        if (!$tag.id) return result;
        return [
          ...result,
          {
            tagId,
            title,
            itemLogoName,
            itemTextColor,
            itemTextAlign,
            itemBackgroundColor,
            itemHoverdBackgroundColor,
          },
        ];
      }, [])
    );
    setIsClickedSideBarIcon(true);
  };

  return (
    <Container>
      <Channels channels={channels} />
      <SideBarIcon
        iconName={iconName}
        iconSize={iconSize}
        iconColor={iconColor}
        iconMargin={iconMargin}
        onClick={onClickSideBarIconHandler}
      />
      {isClickedSideBarIcon && (
        <SideBar
          mainTitle={mainTitle}
          mainTitleSize={mainTitleSize}
          mainTitleColor={mainTitleColor}
          mainTitleAlign={mainTitleAlign}
          mainTitleBorderColor={mainTitleBorderColor}
          sideBarItems={sideBarItems}
          isClickedSideBarIcon={isClickedSideBarIcon}
          backgroundColor={backgroundColor}
          setIsClickedSideBarIcon={setIsClickedSideBarIcon}
        />
      )}
    </Container>
  );
};

export default SideContainer;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
