import React from 'react';
import styled from 'styled-components';
import History from './History';

const Experience = () => {
  return (
    <Wrap>
      <div className="title">Experience</div>
      <hr />
      <ChildWrap>
        <History />
      </ChildWrap>
    </Wrap>
  );
};

export default Experience;

const Wrap = styled.div`
  padding: 25px;
  .title {
    padding: 10px 10px 20px 10px;
    font-size: 33px;
    font-weight: 800;
  }
  hr {
    border: 0;
    height: 1.5px;
    background: #d6d6d6;
  }
`;

const ChildWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
