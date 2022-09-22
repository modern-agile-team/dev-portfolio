import { SideBarItemsPropsType } from './SideBarItemsType';
import { SideBarIconType } from './SideBarIconType';

export interface SideBarOptionPropsType extends SideBarIconType {
  mainTitle: string;
  mainTitleColor?: string;
  mainTitleAlign?: string;
  mainTitleBorderColor?: string;
  itemTextColor?: string;
  itemTextAlign?: string;
  itemBackgroundColor?: string;
  itemHoverdBackgroundColor?: string;
  backgroundColor?: string;
}

interface ClickValidationType {
  isClickedSideBarIcon?: boolean;
}

export interface SideBarPropsType extends SideBarItemsPropsType, SideBarStyledPropsType {
  mainTitle: string;
}

export interface SideBarStyledPropsType extends ClickValidationType {
  mainTitleSize?: string;
  mainTitleAlign?: string;
  mainTitleColor?: string;
  backgroundColor?: string;
  mainTitleBorderColor?: string;
}
export interface SideBarBackgroundStyledPropsType extends ClickValidationType {}
