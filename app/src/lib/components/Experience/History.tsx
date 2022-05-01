import React from 'react';
import styled from 'styled-components';

const History = () => {
  return (
    <>
      <Wrap>
        <div className="intro">
          <div className="date">2020.05.01</div>
          <div className="child-title">심서현 프로젝트 빨리 마무리 하자</div>
        </div>
        <div className="des">
          아아아아아아아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ아아아아아아아아아아아아아아ㅏㅇ아아아아아ㅏ아아아아아아아아하드코딩
          재밌다
        </div>
      </Wrap>
      <Wrap>
        <div className="intro">
          <div className="date">2020.05.01</div>
          <div className="child-title">심서현 프로젝트 빨리 마무리 하자</div>
        </div>
        <div className="des">
          아아아아아아아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ아아아아아아아아아아아아아아ㅏㅇ아아아아아ㅏ아아아아아아아아하드코딩
          재밌다
        </div>
      </Wrap>
      <Wrap>
        <div className="intro">
          <div className="date">2020.05.01</div>
          <div className="child-title">심서현 프로젝트 빨리 마무리 하자</div>
        </div>
        <div className="des">
          아아아아아아아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ아아아아아아아아아아아아아아ㅏㅇ아아아아아ㅏ아아아아아아아아하드코딩
          재밌다
        </div>
      </Wrap>
    </>
  );
};

export default History;

const Wrap = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 2.2em 2em 3.2em 2em;
  border-bottom: 0.2px solid #b4b4b4a2;
  .intro {
    min-width: 40%;
    display: flex;
    justify-content: space-between;
    .child-title {
      max-width: 55%;
      font-size: 22px;
      font-weight: 600;
    }
  }
  .des {
    max-width: 45%;
    text-align: center;
  }
`;
