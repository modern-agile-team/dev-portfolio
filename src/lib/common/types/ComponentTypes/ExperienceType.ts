export interface ExperiencePropsType extends ExperienceVerticalOptionType {
  /**
   * Name to be added to Sidebar
   */
  id?: string;
  /**
   * You can add your history data such as date, title, description, etc.	({@link https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/ExperienceType.ts#:~:text=export%20interface-,ExperienceHistoryListType,-%7B "See More about Experience's Props"})
   */
  historyList?: ExperienceHistoryListType[];
  /**
   *  Main title text of Experience Component	(default: Experience)
   */
  title?: string;
  /**
   * Experience Text align (default: left)
   */
  textAlign?: string;
  /**
   * You can decorate your experience with a variety of theme such as 'basic', 'box', 'vertical'.	(default: basic)
   */
  theme?: ExperienceThemeType;
  /**
   * color of title in Experience component
   */
  headerTitleColor?: string;
  /**
   * color of title in history List
   */
  historyTitleColor?: string;
  /**
   * color of date in history List
   */
  dateColor?: string;
  /**
   * color of description in history List
   */
  descriptionColor?: string;
}

export interface ExperienceHistoryListType extends ExperienceStyledPropsType {
  /**
   * Date when you started that kind experience
   */
  startDate?: string;
  /**
   * Date when you finished that kind experience
   */
  endDate?: string;
  /**
   * Title of experience
   */
  title?: string;
  /**
   * Describe about your experience
   */
  description?: string;
}

export interface ExperienceVerticalOptionType {
  /**
   * shape of card specially used in 'vertical' theme ('square' | 'round-square')
   */
  shape?: ExperienceShapeType;
}

export interface VerticalPropsType
  extends ExperienceHistoryListType,
    ExperienceVerticalOptionType,
    ExperienceStyledPropsType {}

export interface IndexPropsType extends ExperienceHistoryListType, ExperienceVerticalOptionType {
  /**
   * You can decorate your experience with a variety of theme such as 'basic', 'box', 'vertical'.	(default: basic)
   */
  theme?: ExperienceThemeType;
}

type ExperienceThemeType = 'basic' | 'box' | 'vertical';
type ExperienceShapeType = 'square' | 'round-square';

/* For Styles */

export interface ExperienceStyledPropsType {
  /**
   * color of title in history List
   */
  historyTitleColor?: string;
  /**
   * Experience Text align (default: left)
   */
  textAlign?: string;
  /**
   * color of title in Experience component
   */
  headerTitleColor?: string;
  /**
   * color of date in history List
   */
  dateColor?: string;
  /**
   * color of description in history List
   */
  descriptionColor?: string;
}

export interface ExperienceChildStyledPropsType {
  /**
   * Experience Text align (default: left)
   */
  theme?: ExperienceThemeType;
}
