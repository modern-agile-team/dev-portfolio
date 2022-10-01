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

export interface IntroPropsType extends IntroOptionType {
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
}
