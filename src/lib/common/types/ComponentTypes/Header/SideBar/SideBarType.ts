import { SideBarItemsPropsType } from './SideBarItemsType';
import { SideBarIconType } from './SideBarIconType';

export interface SideBarOptionPropsType extends SideBarIconType {
  mainTitle: string;
  itemTextColor?: string;
  itemBackgroundColor?: string;
  itemHoverdBackgroundColor?: string;
}

interface ClickValidationType {
  isClickedSideBarIcon: boolean;
}

export interface SideBarPropsType extends SideBarItemsPropsType, ClickValidationType {
  mainTitle: string;
}

export interface SideBarStyledPropsType extends ClickValidationType {}
export interface SideBarBackgroundStyledPropsType extends ClickValidationType {}
