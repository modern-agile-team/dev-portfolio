export interface ItemPropsType {
  /**
   * Image source url	(default: {@link https://picsum.photos/600/600/?random image})
   */
  src?: string;
  /**
   * Main Title Text (default: 'This is title')
   */
  title?: string;
  /**
   * Description Text	(default: 'description')
   */
  description?: string;
  /**
   * title text color style (default: 'white')
   */
  titleColor?: string;
  /**
   * description text color style (default: 'white')
   */
  descriptionColor?: string;
  /**
   * URL you want to redirect when clicked (default: '/')
   */
  redirectURL?: string;
  /**
   * (default: 300)
   */
  textRisingSpeed?: number;
  /**
   * (default: false)
   */
  isTextRising?: boolean;
  /**
   * Inner border color of item when hoverd (default: 'white')
   */
  hoverdInnerBorderColor?: string;
}

export interface topType {
  top: number;
}
