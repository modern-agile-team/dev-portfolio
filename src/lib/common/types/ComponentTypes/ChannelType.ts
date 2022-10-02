export interface ChannelsPropsType {
  /**
   * Enter the props of the channel components as an array of objects.
   * Please check to the following.
   * {@link https://github.com/modern-agile-team/dev-portfolio#channel}
   * 
   * @default channels
   * ```js
        const channels = [{ redirectUrl: '/', name: 'github', color: 'black', size: '24px', margin: '0px 6px', padding: '0px' }, { redirectUrl: '/', name: 'youtube', color: '#e03b35', size: '24px', margin: '0px 6px', padding: '0px' }, { redirectUrl: '/', name: 'linkedin', color: '#1295cd', size: '24px', margin: '0px 6px', padding: '0px' }];
     ```
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
