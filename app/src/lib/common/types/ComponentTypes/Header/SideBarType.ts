import { ChannelType } from '../ChannelType';

export interface SideContainerPropsType {
  channels: ChannelType[];
  sideBarOption: SideBarOptionPropsType;
}

export interface SideBarOptionPropsType {
  mainTitle: string;
  iconSize?: string;
  iconMargin?: string;
}

interface ClickValidationType {
  isClickedSideBarIcon: boolean;
}

export interface SideBarPropsType extends SideBarItemPropsType, ClickValidationType {
  mainTitle: string;
}

export interface SideBarStyledPropsType extends ClickValidationType {}
export interface SideBarBackgroundStyledPropsType extends ClickValidationType {}

export interface SideBarIconPropsType extends SideBarIconStyledPropsType {
  iconSize?: string;
  onClick: () => void;
}
export interface SideBarIconStyledPropsType {
  iconMargin?: string;
}

export interface SideBarItemPropsType {
  sideBarItems: any[];
  setIsClickedSideBarIcon: (isClickedSideBarIcon: boolean) => void;
}

export interface SideBarItemElementType {
  title: string;
}

export interface SideBarItemStyledPropsType {
  margin?: string;
}
