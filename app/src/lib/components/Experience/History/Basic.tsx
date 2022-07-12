import React from 'react';
import styled from 'styled-components';

interface Props {
  startDate?: string;
  endDate?: string;
  title?: string;
  des?: string;
}

const Basic = (props: Props) => {
  const { startDate, endDate, title, des } = props;

  return (
    <div>
      <Wrap>
        <div className="intro">
          <div className="date">
            <span className="start-date">{startDate}</span>
            <span className="end-date">{endDate}</span>
          </div>
          <span className="child-title">{title}</span>
        </div>
        <span className="des">{des}</span>
      </Wrap>
    </div>
  );
};
export default Basic;

const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 2.2em 2em 3.2em 2em;
  border-bottom: 0.2px solid #b4b4b4a2;
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
    }
  }
  .des {
    width: 50%;
    text-align: center;
  }
`;
