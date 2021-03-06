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
        <div className="date">
          <span className="start-date">{startDate}</span>
          <span className="end-date">{endDate}</span>
        </div>
        <span className="child-title">{title}</span>
        <span className="des">{des}</span>
      </Wrap>
    </div>
  );
};
export default Box;

const Wrap = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.14);
  border-radius: 5px;
  .date {
    padding: 2em;
    flex-grow: 1;
    text-align: center;
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
    flex-grow: 1;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    border-right: 1px solid #b4b4b4a2;
    @media screen and (max-width: 800px) {
      border: none;
    }
  }
  .des {
    padding: 2em;
    flex-grow: 2;
    width: 30%;
    text-align: center;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
`;
