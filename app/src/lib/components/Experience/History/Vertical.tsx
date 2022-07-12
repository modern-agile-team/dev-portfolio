import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  startDate?: string;
  endDate?: string;
  title?: string;
  des?: string;
  titleColor?: string;
  shape?: 'square' | 'round-square';
}

const Vertical = (props: Props) => {
  const { startDate, endDate, title, des, shape, titleColor } = props;

  return (
    <Wrap shape={shape} titleColor={titleColor}>
      <div className="intro">
        <div className="date">
          <span className="start-date">{startDate}</span>
          <span className="end-date">{endDate}</span>
        </div>
        <div className="child-title">{title}</div>
      </div>
      <span className="des">{des}</span>
    </Wrap>
  );
};

export default Vertical;

Vertical.defaultProps = {
  shape: 'square',
  titleColor: 'black',
};

const Wrap = styled.div<{
  shape?: 'square' | 'round-square';
  titleColor?: string;
}>`
  width: 23%;
  padding: 10px 2em 1.2em 2em;
  margin: 1em auto;
  border: 1px solid #b4b4b4a2;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.04);
  ${({ shape }) => {
    switch (shape) {
      case 'square':
        return css`
          border-radius: 0px;
        `;
      case 'round-square':
        return css`
          border-radius: 10px;
        `;
    }
  }}
  text-align: center;
  .intro {
    margin: 10px;
    .date {
      margin: 15px 0px 10px 0px;
      font-size: 13px;
      .start-date {
        ::after {
          content: '-';
          margin: 0px 7px;
        }
      }
      .end-date {
        margin-left: 5px;
      }
    }
    .child-title {
      color: ${({ titleColor }) => titleColor ?? 'black'};
      font-size: 25px;
      font-weight: 600;
      padding: 7px;
      border-bottom: 1px solid #b4b4b4a2;
    }
  }
`;
