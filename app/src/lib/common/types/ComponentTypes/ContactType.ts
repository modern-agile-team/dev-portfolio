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
  channels?: Channel[];
  aboutMeInfos?: AboutMeInfoType[];
}

interface AboutMeInfoType {
  title: string;
  description: string;
}

interface Channel {
  name: string;
  redirectUrl: string;
  color?: string;
  size?: string;
  margin?: string;
}
