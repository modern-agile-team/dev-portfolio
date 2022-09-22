export interface SideBarItemsPropsType {
  sideBarItems: any[];
  setIsClickedSideBarIcon: (isClickedSideBarIcon: boolean) => void;
}

export interface SideBarItemsElementType {
  title: string;
  itemTextColor?: string;
  itemBackgroundColor?: string;
  itemHoverdBackgroundColor?: string;
}

export interface SideBarItemsElementStyledType {
  itemTextColor?: string;
  itemBackgroundColor?: string;
  itemHoverdBackgroundColor?: string;
}

export interface SideBarItemsStyledPropsType {
  margin?: string;
}
