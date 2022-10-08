import styled from 'styled-components';
import { ChannelsPropsType, ChannelType } from '../../common/types/ComponentTypes/ChannelType';
import { uuidv4 } from '../../common/utils';
import Channel from './Channel';

/**
 * Enter channels to express yourself, such as personal blog, YouTube, etc.
 *
 * @props channels: Enter the props of the channel components as an array of objects. Please check to the following. {@link https://github.com/modern-agile-team/dev-portfolio#channel}
 * 
 * @example channels 
 * ```js
  [{ redirectUrl: '/', name: 'github', color: 'black', size: '24px', margin: '0px 6px', padding: '0px' }, { redirectUrl: '/', name: 'youtube', color: '#e03b35', size: '24px', margin: '0px 6px', padding: '0px' }, { redirectUrl: '/', name: 'linkedin', color: '#1295cd', size: '24px', margin: '0px 6px', padding: '0px' }]
 ```
 */
const Channels = ({ channels }: ChannelsPropsType) => {
  return (
    <Container>
      {channels?.map(({ redirectUrl, name, color, size, margin }: ChannelType) => (
        <Channel key={uuidv4()} redirectUrl={redirectUrl} name={name} color={color} size={size} margin={margin} />
      ))}
    </Container>
  );
};

export default Channels;

Channels.defaultProps = {
  channels: [
    {
      redirectUrl: '/',
      name: 'github',
      color: 'black',
      size: '24px',
      margin: '0px 6px',
      padding: '0px',
    },
    {
      redirectUrl: '/',
      name: 'youtube',
      color: '#e03b35',
      size: '24px',
      margin: '0px 6px',
      padding: '0px',
    },
    {
      redirectUrl: '/',
      name: 'linkedin',
      color: '#1295cd',
      size: '24px',
      margin: '0px 6px',
      padding: '0px',
    },
  ],
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 374px) {
    display: none;
  }
`;
