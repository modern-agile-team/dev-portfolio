import styled, { css } from 'styled-components';
import HeaderLogo from './HeaderLogo';
import SideContainer from './SideContainer';
import { HeaderPropsType, HeaderStyledPropsType } from '../../common/types/ComponentTypes/Header/HeaderType';
import { useCallback, useEffect, useState } from 'react';

/**
 * This makes it easy to create headers with sidebar
 * and easily customize channels that express yourself,
 * such as personal blog, linked-in, etc.
 *
 * @props headerHeight: Header height style (default: '80px')
 * @props headerWidth: Header Width style (default: '100%')
 * @props headerBackgroundColor: Header background color style (default: 'white')
 *
 * @props logoOption: You can customize the attrs such as logo and title by using logoOption props.
 * @props channels: Enter channels to express yourself, such as personal blog, linked-in, etc.
 * @props sideBarOption: You can customize the attrs such as title and item in sidebar by using sideBarOption props.
 *
 * @refer
 * If you want to check the value of logoOption, channels, sideBarOption, please check the following link. {@link https://github.com/modern-agile-team/dev-portfolio#more-about-headers-props}
 */
const Header = ({
  logoOption = {},
  channels,
  sideBarOption,
  headerHeight,
  headerWidth,
  headerBackgroundColor,
}: HeaderPropsType) => {
  const {
    redirectUrl,
    logoImg,
    logoHidden,
    title,
    logoMargin,
    logoWidth,
    logoHeight,
    titleColor,
    titleSize,
    titleWeight,
  } = logoOption;
  const [pageY, setPageY] = useState<ScrollType>({ value: 0, direction: 'down', scrollUpTimes: 0 });

  const detectScroll = useCallback(() => {
    setPageY(({ value, scrollUpTimes }) => {
      if (value > window.scrollY) return { value: window.scrollY, direction: 'up', scrollUpTimes: scrollUpTimes + 1 };
      else return { value: window.scrollY, direction: 'down', scrollUpTimes: scrollUpTimes - 1 };
    });
  }, [pageY]);

  useEffect(() => {
    window.addEventListener('scroll', detectScroll);
    return () => window.removeEventListener('scroll', detectScroll);
  }, []);
  return (
    <Container
      headerHeight={headerHeight}
      headerWidth={headerWidth}
      headerBackgroundColor={headerBackgroundColor}
      pageY={pageY}
    >
      <HeaderLogo
        redirectUrl={redirectUrl}
        logoImg={logoImg}
        logoHidden={logoHidden}
        logoMargin={logoMargin}
        logoWidth={logoWidth}
        logoHeight={logoHeight}
        title={title}
        titleColor={titleColor}
        titleSize={titleSize}
        titleWeight={titleWeight}
      />
      <SideContainer channels={channels} sideBarOption={sideBarOption} />
    </Container>
  );
};

export default Header;

type ScrollType = {
  value: number;
  direction: 'down' | 'up';
  scrollUpTimes: number;
};

const Container = styled.div<HeaderStyledPropsType & { pageY: ScrollType }>`
  position: sticky;
  top: 0;
  z-index: 10000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ headerHeight }) => headerHeight ?? '80px'};
  width: ${({ headerWidth }) => headerWidth ?? '100%'};
  margin: '0px';
  padding: '0px';
  background-color: ${({ headerBackgroundColor }) => headerBackgroundColor ?? 'whitesmoke'};
  top: 0;
  ${(props) => {
    const MAX_SCROLL_COUNT = 10;
    const MAX_HIDE = 250;

    let top = -MAX_HIDE;
    if (top < 0) {
      top += (-top / MAX_SCROLL_COUNT) * props.pageY.scrollUpTimes;
      if (top < -MAX_HIDE) {
        props.pageY.scrollUpTimes = 0;
        top = -MAX_HIDE;
      } else if (top >= 0) {
        props.pageY.scrollUpTimes = MAX_SCROLL_COUNT;
        top = 0;
      }
    }
    if (props.pageY.value <= 0) {
      top = 0;
      props.pageY.scrollUpTimes = 0;
    }
    return css`
      transition: 0.3s;
      top: ${top > 0 ? 0 : top}px;
    `;
  }};
`;
