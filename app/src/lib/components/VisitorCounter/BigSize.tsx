import React from 'react';
import styled from 'styled-components';

export const BigSize = () => {
  return (
    <Wrap>
      <span className="title">Thank&apos;s to visit my site!</span>
      <Today>
        <span className="today">today</span>
        <span className="today-visitor">0</span>
      </Today>
      <Total>
        <span className="total">total</span>
        <span className="total-visitor">123</span>
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
