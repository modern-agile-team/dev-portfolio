export interface ChannelPropsType {
  channels?: ChannelType[];
}

export interface ChannelType extends ChannelStyledType {
  redirectUrl: string;
  name: string;
  color?: string;
  size?: string;
}

export interface ChannelStyledType {
  margin?: string;
}
