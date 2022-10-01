export interface ChannelPropsType {
  /**
   * Enter the props of the channel components as an array of objects.
   * Please check to the following.
   * {@link https://github.com/modern-agile-team/dev-portfolio#channel}
   */
  channels?: ChannelType[];
}

export interface ChannelType extends ChannelStyledType {
  /**
   * URL you want to redirect when clicked (default: '/')
   */
  redirectUrl?: string;
  /**
   * Channel name (default: 'github')
   */
  name?: string;
  /**
   * Channel icon color style (default: 'black')
   */
  color?: string;
  /**
   * Channel icon size style (default: '24px')
   */
  size?: string;
}

export interface ChannelStyledType {
  /**
   * Channel margin style (default: '0px 6px')
   */
  margin?: string;
  /**
   * Channel padding style (default: '0px')
   */
  padding?: string;
}
