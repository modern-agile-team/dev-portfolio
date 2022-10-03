import React from 'react';
import styled from 'styled-components';
import {
  VisitorCounterPropsType,
  VisitorCounterStylePropsType,
} from '../../common/types/ComponentTypes/VisitorCounterType';

const Default = (props: VisitorCounterPropsType) => {
  const { title, todayVisitor, totalVisitor, backgroundColor, size, titleColor } = props;

  return (
    <Wrap size={size}>
      <Counter backgroundColor={backgroundColor} titleColor={titleColor}>
        <span className="title">{title}</span>
        <span className="today">{todayVisitor}</span>
        <span className="total">{totalVisitor}</span>
      </Counter>
    </Wrap>
  );
};

export default Default;

const Wrap = styled.div<VisitorCounterStylePropsType>`
  display: flex;
  align-items: center;
  font-size: ${({ size }) => size ?? '14px'};
  span {
    padding: 5px 10px;
  }
`;

const Counter = styled.div<VisitorCounterStylePropsType>`
  padding: 5px 0px;
  border: 1px solid #989898;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  .title {
    background-color: ${({ backgroundColor }) => backgroundColor ?? '#91c230c4'};
    color: ${({ titleColor }) => titleColor ?? 'black'};
  }
  .today {
    border-left: 1px solid #989898;
    padding-right: 0px;
    :after {
      content: '/';
      margin: 0px 5px;
    }
  }
  .total {
    padding-left: 0px;
  }
`;
