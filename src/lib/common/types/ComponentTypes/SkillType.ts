export interface SkillPropsType {
  /**
   * Main text that expresses the skill (default: 'Javascript')
   */
  title?: string;
  /**
   * Title size style (default: '24px')
   */
  titleSize?: string;
  /**
   * Title color style (default: 'black')
   */
  titleColor?: string;
  /**
   * If this value is set to True, you can hide the title. (default: false)
   */
  isHiddenTitle?: boolean;
  /**
   * Enter the name of the icon you searched on the following site. (default: 'ion:logo-javascript') {@link https://icon-sets.iconify.design/}
   */
  iconName?: string;
  /**
   * Icon size style (defualt: '40px')
   */
  iconSize?: string;
  /**
   * Icon color style (default: '#F0DB4F')
   */
  iconColor?: string;
  /**
   * Skill margin style (defualt: '0px')
   */
  margin?: string;
  /**
   * Skill padding style (defualt: '0px')
   */
  padding?: string;
  /**
   * Skill background color style (default: 'white')
   */
  backgroundColor?: string;
  /**
   * Skill border color style (default: 'white')
   */
  borderColor?: string;
  /**
   * Skill border-radius style (default: '12px')
   */
  borderRadius?: string;
}
