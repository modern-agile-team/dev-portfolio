export interface ChannelPropsType {
  channels?: ChannelType[];
}

export interface ChannelType {
  redirectUrl: string;
  name: string;
  color?: string;
  size?: string;
  margin?: string;
}

export interface ChannelStyledType {
  margin: string;
}
