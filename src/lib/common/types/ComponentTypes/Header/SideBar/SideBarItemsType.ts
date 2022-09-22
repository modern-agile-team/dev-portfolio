export interface SideBarItemsPropsType {
  sideBarItems: any[];
  setIsClickedSideBarIcon: (isClickedSideBarIcon: boolean) => void;
}

export interface SideBarItemsElementType extends SideBarItemsElementStyledType {
  title: string;
}

export interface SideBarItemsElementStyledType {
  itemTextColor?: string;
  itemTextAlign?: string;
  itemBackgroundColor?: string;
  itemHoverdBackgroundColor?: string;
}

export interface SideBarItemsStyledPropsType {
  margin?: string;
}
