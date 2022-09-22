import { useState } from 'react';
import styled from 'styled-components';
import Channels from '../Channels/Channels';
import SideBarIcon from './SideContainer/SideBarIcon';
import SideBar from './SideContainer/SideBar';
import { SideContainerPropsType } from '../../common/types/ComponentTypes/Header/SideContainerType';

const SideContainer = ({ channels, sideBarOption }: SideContainerPropsType) => {
  const {
    mainTitle,
    mainTitleColor,
    mainTitleAlign,
    mainTitleBorderColor,
    backgroundColor,
    iconSize,
    iconColor,
    iconMargin,
    itemTextColor,
    itemTextAlign,
    itemBackgroundColor,
    itemHoverdBackgroundColor,
  } = sideBarOption;

  const [isClickedSideBarIcon, setIsClickedSideBarIcon] = useState(false);
  const [sideBarItems, setSideBarItems] = useState([{}]);

  const onClickSideBarIconHandler = () => {
    const $tags: any = document.querySelector('.App')?.childNodes;

    setSideBarItems(
      Array.from($tags).reduce((result: any[], $tag: any) => {
        if (!$tag.id) return result;
        return [
          ...result,
          { title: $tag.id, itemTextColor, itemTextAlign, itemBackgroundColor, itemHoverdBackgroundColor },
        ];
      }, [])
    );
    setIsClickedSideBarIcon(true);
  };

  return (
    <Container>
      <Channels channels={channels} />
      <SideBarIcon
        iconSize={iconSize}
        iconColor={iconColor}
        iconMargin={iconMargin}
        onClick={onClickSideBarIconHandler}
      />
      {isClickedSideBarIcon && (
        <SideBar
          mainTitle={mainTitle}
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
