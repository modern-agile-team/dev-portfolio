import { ChannelType } from '../ChannelType';
import { AboutMeInfoPropsType } from './AboutMeInfoType';

export interface ContactPropsType extends ContactOptionType {
  /**
   * Name to be added to Sidebar
   */
  id?: string;
  /**
   * Contact Background Color	(default: whitesmoke)
   */
  backgroundColor?: string;
}

export interface ContactOptionType {
  /**
   * Core of your contacts (default: 'Hello, my name is DEV_PORTFOLIO')
   */
  title?: string;
  /**
   * Sub title text (default: 'If you're interested in me, please press the button below :D')
   */
  subTitle?: string;
  /**
   * Your Email (default: 'abc@dev-portfolio.com')
   */
  email?: string;
  /**
   * Text of button that function as a link to your email (default: 'Want to work with me?')
   */
  buttonText?: string;
  /**
   * Array of your channels like github and blogs (default: an array of 4 in length)
   */
  channels?: ChannelType[];
  /**
   * Your personal information like TEL, Home etc
   */
  aboutMeInfos?: AboutMeInfoPropsType[];
}

/* For Styles */

export interface ContactStyledPropsType {
  id?: string;
  backgroundColor?: string;
}
