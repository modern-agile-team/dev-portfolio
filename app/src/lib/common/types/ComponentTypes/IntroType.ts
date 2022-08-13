export interface IntroTitlePropsType {
  title?: string;
  shortIntro?: string;
}

export interface IntroFormPropsType {
  description?: string;
}

type IntroTextAlignType = 'left' | 'center';

export interface IntroOptionType extends IntroTitlePropsType, IntroFormPropsType {}

export interface IntroPropsType {
  id?: string;
  textAlign?: IntroTextAlignType;
  backgroundColor?: string;
  introOption?: IntroOptionType;
}
