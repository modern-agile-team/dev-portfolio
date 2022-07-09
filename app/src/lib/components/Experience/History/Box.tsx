import React from 'react';
import styled from 'styled-components';

interface Props {
  startDate?: string;
  endDate?: string;
  title?: string;
  des?: string;
}

const Box = (props: Props) => {
  const { startDate, endDate, title, des } = props;

  return (
    <div>
      <Wrap>
        <div className="intro">
          <div className="date">
            <div className="start-date">{startDate}</div>
            <div className="end-date">{endDate}</div>
          </div>
          <div className="child-title">{title}</div>
        </div>
        <div className="des">{des}</div>
      </Wrap>
    </div>
  );
};
export default Box;

const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 2.2em 2em 3.2em 2em;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.14);
  border-radius: 5px;
  margin: 10px;
  white-space: pre-wrap;
  .intro {
    min-width: 42%;
    display: flex;
    justify-content: space-around;
    .date {
      display: flex;
      justify-content: space-between;
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
      width: 58%;
      font-size: 22px;
      font-weight: 600;
      text-align: center;
      border-right: 1px solid #b4b4b4a2;
    }
  }
  .des {
    width: 50%;
    text-align: center;
  }
`;
