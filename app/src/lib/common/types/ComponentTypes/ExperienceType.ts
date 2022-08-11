export interface ExperiencePropsType {
  id?: string;
  historyList?: ExperienceHistoryListType[];
  title?: string;
  textAlign?: string;
  background?: string;
  theme?: ExperienceThemeType;
  verticalOption?: ExperienceVerticalOptionType;
}

export interface ExperienceHistoryListType {
  startDate?: string;
  endDate?: string;
  title?: string;
  des?: string;
}

export interface ExperienceVerticalOptionType {
  titleColor?: string;
  shape?: ExperienceShapeType;
}

export interface VerticalPropsType extends ExperienceHistoryListType, ExperienceVerticalOptionType {}

export interface IndexPropsType extends ExperienceHistoryListType, ExperienceVerticalOptionType {
  theme?: ExperienceThemeType;
}

type ExperienceThemeType = 'basic' | 'box' | 'vertical';
type ExperienceShapeType = 'square' | 'round-square';

/* For Styles */

export interface ExperienceStyledPropsType {
  textAlign?: string;
  background?: string;
}

export interface ExperienceChildStyledPropsType {
  theme?: ExperienceThemeType;
}
