import React from 'react';
import styled from 'styled-components';
import { VisitorCounterType } from '../../common/types/ComponentTypes/VisitorCounterType';

export const BigSize = (props: VisitorCounterType) => {
  const { title, todayTitle, totalTitle, todayVisitor, totalVisitor } = props;

  return (
    <Wrap>
      <span className="title">{title}</span>
      <Today>
        <span className="today">{todayTitle}</span>
        <span className="today-visitor">{todayVisitor}</span>
      </Today>
      <Total>
        <span className="total">{totalTitle}</span>
        <span className="total-visitor">{totalVisitor}</span>
      </Total>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  padding: 10px;
  background-color: whitesmoke; //props
  min-height: 3em;
  .title {
    padding: 10px;
    flex-grow: 1;
    font-weight: bold;
  }
`;

const Today = styled.div`
  flex-grow: 1;
  padding: 10px;
  .today {
    margin-right: 5em;
  }
  .today-visitor {
    font-size: 16px;
    font-weight: bold;
    color: red; //props
  }
`;

const Total = styled.div`
  flex-grow: 1;
  padding: 10px;
  .total {
    margin-right: 5em;
  }
  .total-visitor {
    font-size: 16px;
    font-weight: bold;
    color: red; //props
  }
`;
