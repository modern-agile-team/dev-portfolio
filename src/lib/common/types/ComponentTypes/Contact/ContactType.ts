import { ChannelsPropsType } from '../ChannelType';
import { AboutMeInfoPropsType } from './AboutMeInfoType';

export interface ContactPropsType extends ChannelsPropsType {
  /**
   * Name to be added to Sidebar
   */
  id?: string;
  /**
   * Main title text of your contacts (default: 'Hello, my name is DEV_PORTFOLIO')
   */
  title?: string;
  /**
   * Title color style (defualt: 'black')
   */
  titleColor?: string;
  /**
   * Sub title text (default: 'If you're interested in me, please press the button below :D')
   */
  subTitle?: string;
  /**
   * Sub title text color style (defualt: 'black')
   */
  subTitleColor?: string;
  /**
   * Your Email (default: 'abc@dev-portfolio.com')
   */
  email?: string;
  /**
   * Text of button that function as a link to your email (default: 'Want to work with me?')
   */
  buttonText?: string;
  /**
   * Button text color style (defualt: 'black')
   */
  buttonTextColor?: string;
  /**
   * Button background color style (default: 'white')
   */
  buttonColor?: string;
  /**
   * Button border color sylte (default: 'black')
   */
  buttonBorderColor?: string;
  /**
   * Contact background color	style (default: 'whitesmoke')
   */
  backgroundColor?: string;
  /**
   * Enter your personal informations such as TEL, home address, etc.
   *
   * @example aboutMeInfos
   * ```ts
   * [{ title: 'Where I live', titleColor: 'black', description: 'Seoul, Republic of Korea', desciptionColor: 'black' }, { title: 'Give me a call', titleColor: 'black', description: 'T. +82 (0)10 1234 5678', desciptionColor: 'black' }, { title: 'Or, why don’t you email me?', titleColor: 'black', description: 'dev-portfolio@gmail.com', desciptionColor: 'black' }]
   * ```
   */
  aboutMeInfos?: AboutMeInfoPropsType[];
}

/* For Styles */

export interface ContactStyledPropsType {
  id?: string;
  backgroundColor?: string;
}
