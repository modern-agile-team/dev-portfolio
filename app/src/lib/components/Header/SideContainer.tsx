import { useState } from 'react';
import styled from 'styled-components';
import Channels from '../Channels/Channels';
import SideBarIcon from './SideContainer/SideBarIcon';
import SideBar from './SideContainer/SideBar';
import { SideContainerPropsType } from '../../common/types/ComponentTypes/Header/SideContainerType';

const SideContainer = ({ channels, sideBarOption }: SideContainerPropsType) => {
  const { mainTitle, iconSize, iconColor, iconMargin } = sideBarOption;

  const [isClickedSideBarIcon, setIsClickedSideBarIcon] = useState(false);
  const [sideBarItems, setSideBarItems] = useState([{ title: 'init string' }]);

  const onClickSideBarIconHandler = () => {
    const $tags: any = document.querySelector('.App')?.childNodes;

    setSideBarItems(
      Array.from($tags).map(($tag: any) => {
        return { title: $tag.id };
      })
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
          sideBarItems={sideBarItems}
          isClickedSideBarIcon={isClickedSideBarIcon}
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
