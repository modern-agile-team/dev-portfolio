import { ChannelType } from '../ChannelType';
import { AboutMeInfoPropsType } from './AboutMeInfoType';

export interface ContactPropsType {
  id?: string;
  contactOption: ContactOptionType;
  backgroundColor?: string;
}

export interface ContactOptionPropsType {
  contactOption: ContactOptionType;
}

interface ContactOptionType {
  title: string;
  subTitle: string;
  email: string;
  buttonText?: string;
  channels?: ChannelType[];
  aboutMeInfos?: AboutMeInfoPropsType[];
}

/* For Styles */

export interface ContactStyledPropsType {
  id?: string;
  backgroundColor?: string;
}
