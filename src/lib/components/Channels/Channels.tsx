import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { ChannelPropsType, ChannelType, ChannelStyledType } from '../../common/types/ComponentTypes/ChannelType';

/**
 *
 * @props redirectUrl: link to channel
 * @props name: Channel name
 * @props color: Color of Channel Icon
 * @props size: Size of Channel Icon
 */
const Channels = ({ channels }: ChannelPropsType) => {
  return (
    <Container>
      {channels?.map(({ redirectUrl, name, color, size, margin = '0px 6px 0px 6px' }: ChannelType, idx: number) => (
        <Channel key={idx} href={redirectUrl} margin={margin}>
          <Icon icon={`simple-icons:${name}`} color={color} fontSize={size} />
        </Channel>
      ))}
    </Container>
  );
};

export default Channels;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 374px) {
    display: none;
  }
`;

const Channel = styled.a<ChannelStyledType>`
  margin: ${({ margin }) => margin ?? '0px 6px 0px 6px'};
  &:hover {
    scale: calc(1.05);
  }
`;
