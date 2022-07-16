import styled from 'styled-components';
import Logo from './Logo';
import SideContainer from './SideContainer/SideContainer';

export type LogoOptionType = {
  uriToMove: string;
  logoImg?: string;
  title: string;
  styles?: any;
};

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

const logoOptionDefault = {
  uriToMove: '/',
  logoImg: undefined,
  title: 'dev-portfolio',
  styles: {
    logoMargin: '0px 16px 0px 16px',
    titleColor: 'black',
    titleSize: '32px',
    titleWeight: '800',
  },
};

const channelsDefault = [
  { name: 'github', uriToMove: 'https://', color: '#181717BB', size: '30px' },
  { name: 'naver', uriToMove: 'https://', color: '#47A141BB', size: '30px' },
  { name: 'facebook', uriToMove: 'https://', color: '#1877F2BB', size: '30px' },
  { name: 'youtube', uriToMove: 'https://', color: '#FF0000BB', size: '30px' },
];

const sideBarOptionDefault = {
  mainTitle: 'dev-portfolio',
  items: [],
  styles: { size: '50px', margin: '0px 12px 0px 24px' },
};

const Header = ({
  logoOption = logoOptionDefault,
  channels = channelsDefault,
  sideBarOption = sideBarOptionDefault,
}) => {
  return (
    <Container id="Header">
      <Logo logoOption={{ ...logoOptionDefault, ...logoOption }} />
      <SideContainer channels={channels} sideBarOption={{ ...sideBarOptionDefault, ...sideBarOption }} />
    </Container>
  );
};

export default Header;
