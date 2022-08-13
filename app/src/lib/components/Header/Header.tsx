import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import SideContainer from './SideContainer/SideContainer';
import { HeaderPropsType, HeaderStyledPropsType } from '../../common/types/ComponentTypes/Header/HeaderType';
import { HeaderLogoOptionType } from '../../common/types/ComponentTypes/Header/HeaderLogoType';
import { ChannelType } from '../../common/types/ComponentTypes/ChannelType';
import { SideBarOptionPropsType } from '../../common/types/ComponentTypes/Header/SideBarType';

const Header = ({
  id,
  logoOption = logoOptionDefault,
  channels = channelsDefault,
  sideBarOption = sideBarOptionDefault,
  headerHeight,
  headerWidth,
  headerBackgroundColor,
}: HeaderPropsType) => {
  return (
    <Container
      id={id}
      headerHeight={headerHeight}
      headerWidth={headerWidth}
      headerBackgroundColor={headerBackgroundColor}
    >
      <HeaderLogo logoOption={{ ...logoOptionDefault, ...logoOption }} />
      <SideContainer channels={channels} sideBarOption={{ ...sideBarOptionDefault, ...sideBarOption }} />
    </Container>
  );
};

export default Header;

const Container = styled.div<HeaderStyledPropsType>`
  position: sticky;
  top: 0;
  z-index: 10000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ headerHeight }) => headerHeight ?? '100px'};
  width: ${({ headerWidth }) => headerWidth ?? '100%'};
  background-color: ${({ headerBackgroundColor }) => headerBackgroundColor ?? 'whitesmoke'};
  @media screen and (max-width: 600px) {
    height: 80px;
  }
`;

const logoOptionDefault: HeaderLogoOptionType = {
  redirectUrl: '/',
  logoImg: '',
  logoHidden: false,
  title: 'dev-portfolio',
  logoMargin: '0px 16px 0px 16px',
  logoWidth: '50px',
  logoHeight: '50px',
  titleColor: 'black',
  titleSize: '32px',
  titleWeight: '800',
};

const channelsDefault: ChannelType[] = [
  { name: 'github', redirectUrl: 'https://', color: '#181717BB', size: '30px' },
  { name: 'naver', redirectUrl: 'https://', color: '#47A141BB', size: '30px' },
  { name: 'facebook', redirectUrl: 'https://', color: '#1877F2BB', size: '30px' },
  { name: 'youtube', redirectUrl: 'https://', color: '#FF0000BB', size: '30px' },
];

const sideBarOptionDefault: SideBarOptionPropsType = {
  mainTitle: 'dev-portfolio',
  iconSize: '50px',
  iconMargin: '0px 12px 0px 24px',
};
