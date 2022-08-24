import React from 'react';
import styled from 'styled-components';
import { VisitorCounterType } from '../../common/types/ComponentTypes/VisitorCounterType';

export const Simple = (props: VisitorCounterType) => {
  const { todayTitle, todayVisitor, totalTitle, totalVisitor } = props;

  return (
    <Wrap>
      <span className="today">{todayTitle}</span>
      <span className="today-visitor">{todayVisitor}</span>
      <span className="total">{totalTitle}</span>
      <span className="total-visitor">{totalVisitor}</span>
    </Wrap>
  );
};

const Wrap = styled.div`
  span {
    padding: 3px;
  }
  .today-visitor {
    font-weight: bold;
    color: red; //props
    ::after {
      content: '|';
      margin-left: 8px;
      font-weight: normal;
      color: black;
    }
  }
  .total-visitor {
    font-weight: bold;
    color: black; //props
  }
`;
