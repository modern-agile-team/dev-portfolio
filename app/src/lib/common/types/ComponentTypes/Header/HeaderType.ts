import { SideBarOptionPropsType } from './SideBar/SideBarType';
import { ChannelType } from '../ChannelType';
import { HeaderLogoPropsType } from './HeaderLogoType';

export interface HeaderPropsType extends HeaderStyledPropsType {
  /**
   * Name to be added to Sidebar
   */
  id?: string;
  /**
   * Logo & Header_Title only props (default: {@link https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/Header/HeaderLogoType.ts "See More about Header's Props"})
   */
  logoOption: HeaderLogoPropsType;
  /**
   * Channel-only props such as Github and LinkedIn, etc (default: {@link https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/ChannelType.ts "See More about Header's Props"})
   */
  channels?: ChannelType[];
  /**
   * Sidebar-only props such as Sidebar's Icon, etc (default: {@link https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/Header/SideBar/SideBarType.ts#1 "See More about Header's Props"})
   */
  sideBarOption: SideBarOptionPropsType;
}

export interface HeaderStyledPropsType {
  /**
   * Header Height (default: 80px)
   */
  headerHeight?: string;
  /**
   * Header Width (default: 100%)
   */
  headerWidth?: string;
  /**
   * CSS for Background color of Header Component (default: white)
   */
  headerBackgroundColor?: string;
}
