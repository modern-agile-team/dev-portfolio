import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Channels from '../Channels/Channels';
import SideBarIcon from './SideContainer/SideBarIcon';
import SideBar from './SideContainer/SideBar';
import { SideContainerPropsType } from '../../common/types/ComponentTypes/Header/SideContainerType';
import { SideBarOptionPropsType } from '../../common/types/ComponentTypes/Header/SideBar/SideBarType';
import { createPortal } from 'react-dom';
import { MAIN } from '../../common/theme';
import { SideBarItemsElementType } from '../../common/types/ComponentTypes/Header/SideBar/SideBarItemsType';

const SideContainer = ({ channels, sideBarOption = {} }: SideContainerPropsType) => {
  // Default value of sideBarOption
  const {
    mainTitle = 'Wellcome to dev-portfolio',
    mainTitleSize = '20px',
    mainTitleColor = 'white',
    mainTitleAlign = 'left',
    mainTitleBorderColor = 'white',
    backgroundColor = MAIN.MAIN_COLOR,
    iconName = 'ant-design:menu-fold-outlined',
    iconSize = '30px',
    iconColor = '#434521',
    iconMargin = '0px 12px',
    itemTextColor = 'white',
    itemTextAlign = 'left',
    itemBackgroundColor = MAIN.MAIN_COLOR,
    itemHoverdBackgroundColor = 'black',
  }: SideBarOptionPropsType = sideBarOption;

  const [isClickedSideBarIcon, setIsClickedSideBarIcon] = useState(false);
  const [sideBarItems, setSideBarItems] = useState<SideBarItemsElementType[]>();

  const onClickSideBarIconHandler = () => {
    const app = document.querySelector('.App');
    if (!app) return;
    const $tags = Array.from(app.children);

    setSideBarItems(
      Array.from(Array.prototype.slice.call($tags)).reduce((result: Element[], $tag: Element) => {
        const tagId: string = $tag.id;

        let title: string | undefined;
        let itemLogoName: string | undefined;
        try {
          if (eval(tagId)[0] === undefined) throw new Error('eval(tagId) is not array');
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

  useEffect(() => {
    if (isClickedSideBarIcon) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isClickedSideBarIcon]);

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
      {isClickedSideBarIcon &&
        createPortal(
          <SideBar
            mainTitle={mainTitle}
            mainTitleSize={mainTitleSize}
            mainTitleColor={mainTitleColor}
            mainTitleAlign={mainTitleAlign}
            mainTitleBorderColor={mainTitleBorderColor}
            sideBarItems={sideBarItems || []}
            isClickedSideBarIcon={isClickedSideBarIcon}
            backgroundColor={backgroundColor}
            setIsClickedSideBarIcon={setIsClickedSideBarIcon}
          />,
          document.body
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
