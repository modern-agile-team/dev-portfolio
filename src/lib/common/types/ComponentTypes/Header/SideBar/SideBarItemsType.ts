export interface SideBarItemsPropsType {
  sideBarItems: any[];
  setIsClickedSideBarIcon: (isClickedSideBarIcon: boolean) => void;
}

export interface SideBarItemsElementType extends SideBarItemsElementStyledType {
  title: string;
}

export interface SideBarItemsElementStyledType {
  tagId?: string;
  itemTextColor?: string;
  itemTextAlign?: string;
  itemBackgroundColor?: string;
  itemHoverdBackgroundColor?: string;
  itemLogoName?: string;
}

export interface SideBarItemsStyledPropsType {
  margin?: string;
  itemTextAlign?: string;
}
