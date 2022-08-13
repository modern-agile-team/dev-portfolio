import { SideBarOptionPropsType } from './SideBar/SideBarType';
import { ChannelType } from '../ChannelType';
import { HeaderLogoOptionType } from './HeaderLogoType';

export interface HeaderPropsType extends HeaderStyledPropsType {
  id?: string;
  logoOption?: HeaderLogoOptionType;
  channels?: ChannelType[];
  sideBarOption?: SideBarOptionPropsType;
}

export interface HeaderStyledPropsType {
  headerHeight?: string;
  headerWidth?: string;
  headerBackgroundColor?: string;
}
