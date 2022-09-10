import { ChannelType } from '../ChannelType';
import { AboutMeInfoPropsType } from './AboutMeInfoType';

export interface ContactPropsType {
  /**
   * Name to be added to Sidebar
   */
  id?: string;
  /**
   * Contact-only props such as title, email button, channels and my personal info, etc	(default: {@link  https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/Contact/ContactType.ts "See More about Contact's Props"})
   */
  contactOption?: ContactOptionType;
  /**
   * Contact Background Color	(default: whitesmoke)
   */
  backgroundColor?: string;
}

export interface ContactOptionPropsType {
  /**
   * Contact-only props such as title, email button, channels and my personal info, etc	(default: {@link  https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/Contact/ContactType.ts "See More about Contact's Props"})
   */
  contactOption: ContactOptionType;
}

interface ContactOptionType {
  /**
   * Core of your contacts (default: 'Hello, my name is DEV_PORTFOLIO')
   */
  title: string;
  /**
   * Sub title text (default: 'If you're interested in me, please press the button below :D')
   */
  subTitle: string;
  /**
   * Your Email (default: 'abc@dev-portfolio.com')
   */
  email: string;
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
