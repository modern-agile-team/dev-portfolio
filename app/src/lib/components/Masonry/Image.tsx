import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  subhead?: string;
  head?: string;
}

const Image = ({ src, subhead, head }: Props) => {
  return (
    <Wrap>
      <Items>
        <div className="imgWrap">
          <img src={src} />
        </div>
        <div className="imgDes">
          <p>{subhead}</p>
          <span>{head}</span>
        </div>
      </Items>
    </Wrap>
  );
};

export default Image;

Image.defaultProps = {
  subhead: 'Write your subhead',
  head: 'script your head',
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  display: inline;
`;

const Items = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 0.5em;
  .imgWrap {
    overflow: hidden;
  }
  img {
    width: 100%;
    transition: 0.6s;
    object-fit: cover;
    :hover {
      transform: scale(105%);
    }
  }
  .imgDes {
    p {
      margin: 5px 0px 2px 1px;
      font-size: 14px;
    }
    span {
      font-size: 22px;
      font-weight: 800;
    }
    margin-bottom: 10px;
  }
`;
