import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  return (
    <Wrap>
      <div className="title">Experience</div>
      <hr />
      <ChildWrap>
        <div className="date">date</div>
        <div className="child-title">title</div>
        <div className="des">des</div>
      </ChildWrap>
    </Wrap>
  );
};

export default Experience;

const Wrap = styled.div`
  border: 1px solid;
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
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  padding: 1em 2em;
`;
