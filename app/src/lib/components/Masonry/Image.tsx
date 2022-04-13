import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

const Image = ({ src }: Props) => {
  return (
    <Wrap>
      <Items>
        <img src={src} />
      </Items>
    </Wrap>
  );
};

export default Image;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
`;

const Items = styled.div`
  display: inline-block;
  width: 100%;
  img {
    width: 100%;
    cursor: pointer;
    transition: 0.3s;
    :hover {
      transform: scale(105%);
    }
  }
`;
