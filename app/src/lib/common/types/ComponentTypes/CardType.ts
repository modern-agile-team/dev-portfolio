export interface CardPropsType {
  children?: React.ReactChild;
  width?: string;
  height?: string;
  shape?: CardShapeType;
  hover?: CardHoverType;
  redirectURL?: string;
}

export interface CardStyledPropsType {
  width?: string;
  height?: string;
  shape?: CardShapeType;
  hover?: CardHoverType;
}

type CardShapeType = 'square' | 'round-square' | 'round';
type CardHoverType = 'up' | 'down' | 'zoom';
