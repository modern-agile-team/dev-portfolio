export interface SideBarIconType extends SideBarIconStyledPropsType {
  iconSize?: string;
  iconColor?: string;
}

export interface SideBarIconPropsType extends SideBarIconType {
  onClick: () => void;
}

export interface SideBarIconStyledPropsType {
  logoName?: string;
  iconMargin?: string;
}
