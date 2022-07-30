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
export default Basic;

const Wrap = styled.div`
  margin: 0 auto;
  padding: 0em 4vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 0.2px solid #b4b4b4a2;
  .date {
    width: 15%;
    padding: 2em;
    flex-grow: 1;
    @media screen and (max-width: 800px) {
      width: 100%;
      text-align: center;
    }
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
    width: 15%;
    flex-grow: 1;
    font-size: 22px;
    font-weight: 600;
    @media screen and (max-width: 800px) {
      width: 100%;
      text-align: center;
      border: none;
    }
  }
  .des {
    padding: 2em;
    flex-grow: 2;
    width: 30%;
    @media screen and (max-width: 800px) {
      width: 100%;
      text-align: center;
    }
  }
`;
