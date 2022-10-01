export interface SkillPropsType {
  /**
   * Main text that expresses the skill (default: 'dev-portfolio')
   */
  title?: string;
  /**
   * Title size style (default: '24px')
   */
  titleSize?: string;
  /**
   * If this value is set to True, you can hide the title. (default: false)
   */
  isHiddenTitle?: string;
  /**
   * Enter the name of the icon you searched on the following site. (default: 'simple-icons:devdotto') {@link https://icon-sets.iconify.design/}
   */
  iconName?: string;
  /**
   * Icon size style (defualt: '50px')
   */
  iconSize?: string;
  /**
   * Skill margin style (defualt: '0px')
   */
  margin?: string;
  /**
   * Skill padding style (defualt: '0px')
   */
  padding?: string;
}
