export interface MasonryStyledPropsType {
  padding?: string;
  column?: number;
}

export interface MasonryPropsType extends MasonryStyledPropsType {
  id?: string;
  children: React.ReactNode;
}
