import React from 'react';
import styled from 'styled-components';
import { VisitorCounterDefaultType } from '../../common/types/ComponentTypes/VisitorCounterType';

const Default = (props: VisitorCounterDefaultType) => {
  const { title, todayVisitor, totalVisitor } = props;

  return (
    <Wrap>
      <Counter>
        <span className="title">{title}</span>
        <span className="today">{todayVisitor}</span>
        <span className="total">{totalVisitor}</span>
      </Counter>
    </Wrap>
  );
};

export default Default;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  span {
    padding: 5px 10px;
  }
`;

const Counter = styled.div`
  padding: 5px 0px;
  border: 1px solid #989898;
  border-radius: 5px;
  .title {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #91c230c4; //props
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
