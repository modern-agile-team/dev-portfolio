import { SideBarItemsPropsType } from './SideBarItemsType';

export interface SideBarOptionPropsType {
  mainTitle: string;
  iconSize?: string;
  iconMargin?: string;
}

interface ClickValidationType {
  isClickedSideBarIcon: boolean;
}

export interface SideBarPropsType extends SideBarItemsPropsType, ClickValidationType {
  mainTitle: string;
}

export interface SideBarStyledPropsType extends ClickValidationType {}
export interface SideBarBackgroundStyledPropsType extends ClickValidationType {}
