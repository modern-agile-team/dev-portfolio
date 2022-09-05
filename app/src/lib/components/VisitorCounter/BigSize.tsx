import React from 'react';
import styled from 'styled-components';
import {
  VisitorCounterPropsType,
  VisitorCounterStylePropsType,
} from '../../common/types/ComponentTypes/VisitorCounterType';

export const BigSize = (props: VisitorCounterPropsType) => {
  const {
    title,
    todayTitle,
    totalTitle,
    todayVisitor,
    totalVisitor,
    backgroundColor,
    size,
    todayBoldColor,
    totalBoldColor,
  } = props;

  return (
    <Wrap backgroundColor={backgroundColor} size={size}>
      <span className="title">{title}</span>
      <Today todayBoldColor={todayBoldColor}>
        <span className="today">{todayTitle}</span>
        <span className="today-visitor">{todayVisitor}</span>
      </Today>
      <Total totalBoldColor={totalBoldColor}>
        <span className="total">{totalTitle}</span>
        <span className="total-visitor">{totalVisitor}</span>
      </Total>
    </Wrap>
  );
};

const Wrap = styled.div<VisitorCounterStylePropsType>`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  padding: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'whitesmoke'};
  min-height: 3em;
  font-size: ${({ size }) => size ?? '14px'};
  .title {
    padding: 10px;
    flex-grow: 1;
    font-weight: bold;
  }
`;

const Today = styled.div<VisitorCounterStylePropsType>`
  flex-grow: 1;
  padding: 10px;
  .today {
    margin-right: 5em;
  }
  .today-visitor {
    font-weight: bold;
    color: ${({ todayBoldColor }) => todayBoldColor ?? 'red'};
  }
`;

const Total = styled.div<VisitorCounterStylePropsType>`
  flex-grow: 1;
  padding: 10px;
  .total {
    margin-right: 5em;
  }
  .total-visitor {
    font-weight: bold;
    color: ${({ totalBoldColor }) => totalBoldColor ?? 'red'};
  }
`;
