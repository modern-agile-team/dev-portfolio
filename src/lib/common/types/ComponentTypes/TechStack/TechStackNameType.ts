export interface TechStackNamePropsType {
  /**
   * The main tech-name that will be shown to other users. (default: 'Tech-name that will be shown to other users')
   */
  name?: string;
  /**
   * name text size style. (default: '16px')
   */
  fontSize?: string;
  /**
   * name text color style (defualt: 'black')
   */
  nameTextColor?: string;
  /**
   * The actual name of the technology that you want to use as your logo. (default: 'javascript')
   */
  logoName?: string;
  /**
   * logoName icon size style. (default: '24px')
   */
  logoSize?: string;
}

export interface TechStackNameContainerStyledPropsType {
  margin?: string;
}
