import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  title?: string;
  description?: string;
}

const Image = ({ src, title, description }: Props) => {
  return (
    <Wrap>
      <Items>
        <img src={src} />
        <div className="imgDes">
          <p>{title}</p>
          <span>{description}</span>
        </div>
      </Items>
    </Wrap>
  );
};

export default Image;

Image.defaultProps = {
  title: '제목을 입력하세요',
  description: '본문을 입력하세요',
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5em;
  display: inline;
`;

const Items = styled.div`
  display: inline-block;
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.5em;
  img {
    width: 100%;
    cursor: pointer;
    transition: 0.6s;
    object-fit: cover;
    :hover {
      transform: scale(105%);
    }
  }
  .imgDes {
    p {
      margin-left: 1px;
      font-size: 14px;
    }
    span {
      font-size: 22px;
      font-weight: 800;
    }
  }
`;
