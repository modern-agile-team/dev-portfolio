export interface IntroTitlePropsType {
  /**
   * Core of your introduction
   */
  title?: string;
  /**
   * a brief introduction
   */
  shortIntro?: string;
}

export interface IntroFormPropsType {
  /**
   * Introduce yourself
   */
  description?: string;
}

type IntroTextAlignType = 'left' | 'center';

export interface IntroOptionType extends IntroTitlePropsType, IntroFormPropsType {}

export interface IntroPropsType {
  /**
   * Name to be added to Sidebar
   */
  id?: string;
  /**
   * Intro Text align	center (default: center)
   */
  textAlign?: IntroTextAlignType;
  /**
   * Intro Background color	whitesmoke (default: whitesmoke)
   */
  backgroundColor?: string;
  /**
   * Intro-only props such as title, description, etc	(default: {@link https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/IntroType.ts "See More about Intro's Props"})
   */
  introOption?: IntroOptionType;
}
