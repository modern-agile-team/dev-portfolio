export interface ChannelPropsType {
  channels?: ChannelType[];
}

export interface ChannelType extends ChannelStyledType {
  /**
   * link to channel
   */
  redirectUrl: string;
  /**
   * Channel name
   */
  name: string;
  /**
   * Color of Channel Icon
   */
  color?: string;
  /**
   * Size of Channel Icon (unit: px)
   */
  size?: string;
}

export interface ChannelStyledType {
  /**
   * Css margin of each Icons
   */
  margin?: string;
}
