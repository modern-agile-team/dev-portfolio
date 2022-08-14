import { SideBarOptionPropsType } from './SideBar/SideBarType';
import { ChannelType } from '../ChannelType';
import { HeaderLogoPropsType } from './HeaderLogoType';

export interface HeaderPropsType extends HeaderStyledPropsType {
  id?: string;
  logoOption: HeaderLogoPropsType;
  channels?: ChannelType[];
  sideBarOption: SideBarOptionPropsType;
}

export interface HeaderStyledPropsType {
  headerHeight?: string;
  headerWidth?: string;
  headerBackgroundColor?: string;
}
