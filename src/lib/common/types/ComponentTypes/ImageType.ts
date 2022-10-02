export interface ImagePropsType {
  /**
   * Image source url. (default: {@link https://picsum.photos/300/300/?random})
   */
  src?: string;
  /**
   * Sub title text.	(default: 'Write your subhead')
   */
  subhead?: string;
  /**
   * subhead text size style. (default: '14px')
   */
  subheadSize?: string;
  /**
   * subhead text color size style. (default: 'black')
   */
  subheadColor?: string;
  /**
   * Main title text.	(default: 'Write your head')
   */
  head?: string;
  /**
   * head text size style. (default: '20px')
   */
  headSize?: string;
  /**
   * head text weight style. (default: '700')
   */
  headWeight?: string;
  /**
   * head color style. (default: 'black')
   */
  headColor?: string;
  /**
   * URL you want to redirect when clicked. (default: '/')
   */
  redirectURL?: string;
  /**
   * If this value is set to True, you can hide the head text. (default: false)
   */
  noShowHead?: boolean;
  /**
   * If this value is set to True, you can zoom image when hovered on item. (default: true)
   */
  zoomWhenHover?: boolean;
}
