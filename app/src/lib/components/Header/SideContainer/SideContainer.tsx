import { useState } from 'react';
import styled from 'styled-components';
import Channels from '../../Channels/Channels';
import SideBarIcon from './SideBarIcon';
import SideBar from './SideBar';

export type SideBarType = {
  mainTitle: string;
  items?: any[];
  size?: string;
  margin?: string;
}

const SideContainer = ({ channels, sideBarOption }: any) => {
  let { mainTitle, items = [], size = '50px', margin = '0px 12px 0px 24px' }: SideBarType = sideBarOption;

  const [isClickedSideBarIcon, setIsClickedSideBarIcon] = useState(false);
  const [sideBarItems, setSideBarItems] = useState(items);

  const onClickSideBarIconHandler = () => {
    const $tags: any = document.querySelector('#root')?.childNodes;
    setSideBarItems(
      Array.from($tags)
        .map(($tag: any) => {
          return { title: $tag.id };
        })
    );
    setIsClickedSideBarIcon(true);
  };

  return (
    <Container>
      <Channels channels={channels} />
      <SideBarIcon size={size} margin={margin} onClick={onClickSideBarIconHandler} />
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