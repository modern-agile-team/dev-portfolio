import React, { useState } from 'react';
import styled from 'styled-components';

import Channels from '../../Channels/Channels';
import SideBarIcon from './SideBarIcon';
import SideBar from './SideBar';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SideContainer = ({ channels, sideBarOption }: any) => {
  let { mainTitle, items, styles } = sideBarOption;

  const [isClickedSideBarIcon, setIsClickedSideBarIcon] = useState(false);
  const [sideBarItems, setSideBarItems] = useState(items);

  const onClickSideBarIconHandler = () => {
    const $tags: any = document.querySelector('#root')?.childNodes;
    setSideBarItems(
      Array.from($tags)
        .filter(($tag: any) => $tag.id !== 'Header')
        .map(($tag: any) => {
          return { title: $tag.id };
        }),
    );
    setIsClickedSideBarIcon(true);
  };

  return (
    <Container>
      <Channels channels={channels}></Channels>
      <SideBarIcon styles={styles} onClick={onClickSideBarIconHandler} />
      <SideBar
        mainTitle={mainTitle}
        sideBarItems={sideBarItems}
        isClickedSideBarIcon={isClickedSideBarIcon}
        setIsClickedSideBarIcon={setIsClickedSideBarIcon}
      />
    </Container>
  );
};

export default SideContainer;
