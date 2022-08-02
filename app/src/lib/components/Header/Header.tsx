import styled from 'styled-components';
import Logo from './Logo';
import SideContainer from './SideContainer/SideContainer';
import { SideBarType } from './SideContainer/SideContainer';
import { ChannelProps } from '../Channels/Channels';

interface HeaderProps {
  id?: string;
  logoOption?: LogoOptionType;
  channels?: ChannelProps[];
  sideBarOption?: SideBarType;
  headerHeight?: string;
  headerWidth?: string;
  headerBackgroundColor?: string;
}

export type LogoOptionType = {
  redirectUrl: string;
  title: string;
  logoImg?: string; 
  logoHidden?: boolean;
  logoMargin?: string;
  logoWidth?: string;
  logoHeight?: string;
  titleColor?: string;
  titleSize?: string;
  titleWeight?: string;
};

const logoOptionDefault: LogoOptionType = {
  redirectUrl: '/',
  logoImg: "",
  logoHidden: false,
  title: 'dev-portfolio',
  logoMargin: '0px 16px 0px 16px',
  logoWidth: '50px',
  logoHeight: '50px',
  titleColor: 'black',
  titleSize: '32px',
  titleWeight: '800',
};

const channelsDefault: ChannelProps[] = [
  { name: 'github', redirectUrl: 'https://', color: '#181717BB', size: '30px' },
  { name: 'naver', redirectUrl: 'https://', color: '#47A141BB', size: '30px' },
  { name: 'facebook', redirectUrl: 'https://', color: '#1877F2BB', size: '30px' },
  { name: 'youtube', redirectUrl: 'https://', color: '#FF0000BB', size: '30px' },
];

const sideBarOptionDefault: SideBarType = {
  mainTitle: 'dev-portfolio',
  items: [],
  size: '50px', 
  margin: '0px 12px 0px 24px',
};

const Header = ({
  id,
  logoOption = logoOptionDefault,
  channels = channelsDefault,
  sideBarOption = sideBarOptionDefault,
  headerHeight,
  headerWidth,
  headerBackgroundColor,
}: HeaderProps) => {
  return (
    <Container id={id} headerHeight={headerHeight} headerWidth={headerWidth} headerBackgroundColor={headerBackgroundColor}>
      <Logo logoOption={{ ...logoOptionDefault, ...logoOption }} />
      <SideContainer channels={channels} sideBarOption={{ ...sideBarOptionDefault, ...sideBarOption }} />
    </Container>
  );
};

export default Header;

const Container = styled.div<{
  headerHeight?: string;
  headerWidth?: string;
  headerBackgroundColor?: string;
}>`
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