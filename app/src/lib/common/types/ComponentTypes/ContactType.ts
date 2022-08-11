import { ChannelType } from './ChannelType';

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
  aboutMeInfos?: AboutMeInfoType[];
}

interface AboutMeInfoType {
  title: string;
  description: string;
}
