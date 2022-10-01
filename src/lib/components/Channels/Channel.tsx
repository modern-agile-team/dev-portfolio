import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { ChannelType, ChannelStyledType } from '../../common/types/ComponentTypes/ChannelType';

/**
 * Enter channel to express yourself, such as personal blog, YouTube, etc.
 *
 * @props redirectUrl: URL you want to redirect when clicked (default: '/')
 * @props name: Channel name (default: 'github')
 * @props color: Channel icon color style (default: 'black')
 * @props size: Channel icon size style (default: '24px')
 * @props margin: Channel margin style (default: '0px 6px')
 * @props padding: Channel padding style (default: '0px')
 */
const Channel = ({ redirectUrl, name, color, size, margin, padding }: ChannelType) => {
  return (
    <Container margin={margin} padding={padding}>
      <Link href={redirectUrl}>
        <Icon icon={`simple-icons:${name}`} color={color} fontSize={size} />
      </Link>
    </Container>
  );
};

export default Channel;

Channel.defaultProps = {
  redirectUrl: '/',
  name: 'github',
  color: 'black',
  size: '24px',
  margin: '0px 6px',
  padding: '0px',
};

const Container = styled.span<ChannelStyledType>`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

const Link = styled.a<ChannelStyledType>`
  &:hover {
    scale: calc(1.05);
  }
`;
