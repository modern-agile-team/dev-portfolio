import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import SideContainer from './SideContainer';
import { HeaderPropsType, HeaderStyledPropsType } from '../../common/types/ComponentTypes/Header/HeaderType';
import { ChannelType } from '../../common/types/ComponentTypes/ChannelType';
import { SideBarOptionPropsType } from '../../common/types/ComponentTypes/Header/SideBar/SideBarType';

/**
 *
 * @props id: Name to be added to Sidebar
 * @props logoOption: Logo & Header_Title only props (default: {@link https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/Header/HeaderLogoType.ts "See More about Header's Props"})
 * @props channels: Channel-only props such as Github and LinkedIn, etc (default: {@link https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/ChannelType.ts "See More about Header's Props"})
 * @props sideBarOption: Sidebar-only props such as Sidebar's Icon, etc (default: {@link https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/Header/SideBar/SideBarType.ts#1 "See More about Header's Props"})
 * @props headerHeight: Header Height (default: 80px)
 * @props headerWidth: Header Width (default: 100%)
 * @props headerBackgroundColor: CSS for Background color of Header Component (default: white)
 */
const Header = ({
  id,
  logoOption = logoOptionDefault,
  channels = channelsDefault,
  sideBarOption = sideBarOptionDefault,
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

  return (
    <Container
      id={id}
      headerHeight={headerHeight}
      headerWidth={headerWidth}
      headerBackgroundColor={headerBackgroundColor}
    >
      <HeaderLogo
        redirectUrl={redirectUrl}
        logoImg={logoImg}
        logoHidden={logoHidden}
        title={title}
        logoMargin={logoMargin}
        logoWidth={logoWidth}
        logoHeight={logoHeight}
        titleColor={titleColor}
        titleSize={titleSize}
        titleWeight={titleWeight}
      />
      <SideContainer channels={channels} sideBarOption={sideBarOption} />
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
  height: ${({ headerHeight }) => headerHeight ?? '80px'};
  width: ${({ headerWidth }) => headerWidth ?? '100%'};
  margin: '0px';
  padding: '0px';
  background-color: ${({ headerBackgroundColor }) => headerBackgroundColor ?? 'white'};
`;

const logoOptionDefault = {
  redirectUrl: '/',
  logoImg: '',
  logoHidden: false,
  title: 'dev-portfolio',
  logoMargin: '0px 16px 0px 16px',
  logoWidth: '50px',
  logoHeight: '50px',
  titleColor: 'black',
  titleSize: '24px',
  titleWeight: '800',
};

const channelsDefault: ChannelType[] = [
  { name: 'github', redirectUrl: 'https://', color: '#181717BB', size: '24px' },
  { name: 'linkedin', redirectUrl: 'https://', color: '#1877F2BB', size: '24px' },
];

const sideBarOptionDefault: SideBarOptionPropsType = {
  mainTitle: 'dev-portfolio',
  iconSize: '28px',
  iconColor: '#181717BB',
  iconMargin: '0px 12px 0px 12px',
};
