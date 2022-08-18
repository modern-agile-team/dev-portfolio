import React from 'react';
import styled from 'styled-components';

export const Simple = () => {
  return (
    <Wrap>
      <span className="today">today</span>
      <span className="today-visitor">0</span>
      <span className="total">total</span>
      <span className="total-visitor">123</span>
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
