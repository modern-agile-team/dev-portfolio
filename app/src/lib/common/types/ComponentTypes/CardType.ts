export interface CardPropsType {
  children?: React.ReactChild;
  /**
   * Card width	(default: 10em)
   */
  width?: string;
  /**
   * Card height	(default: 10em)
   */
  height?: string;
  /**
   * You can decorate shape of Card a variety of theme such as 'square', 'round-square', 'round'.	(default: square)
   */
  shape?: CardShapeType;
  /**
   * You can make an effect on Card a variety of theme such as 'up', 'down', 'zoom'.	(default: none)
   */
  hover?: CardHoverType;
  /**
   * URL to redirect (default: /)
   */
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
