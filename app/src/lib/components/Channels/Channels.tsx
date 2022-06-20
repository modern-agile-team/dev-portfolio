import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../dependencies/@iconify/react/dist/iconify';

interface ChannelStyleProps {
  uriToMove: string;
  name: string;
  color: string;
  size: number;
  margin: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Channel = styled.a<{
  margin: string;
}>`
  margin: ${({ margin }) => margin ?? '0px 6px 0px 6px'};
`;

const Channels = ({ channels }: any) => {
  return (
    <Container>
      {channels?.map(({ uriToMove, name, color, size, margin }: ChannelStyleProps, idx: number) => (
        <Channel key={idx} href={uriToMove} margin={margin}>
          <Icon icon={`simple-icons:${name}`} color={color} fontSize={size} />
        </Channel>
      ))}
    </Container>
  );
};

export default Channels;
