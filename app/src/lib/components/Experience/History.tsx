import React from 'react';
import styled from 'styled-components';

interface Props {
  startDate?: string;
  endDate?: string;
  title?: string;
  des?: string;
}

const History = (props: Props) => {
  const {
    startDate = '2020.05.o1',
    endDate = '2020.05.o1',
    title = '심서현 프로젝트 빨리 마무리 하자',
    des = '아아아아아아아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ아아아아아아아아아아아아아아ㅏㅇ아아아아아ㅏ아아아아아아아아하드코딩재밌다',
  } = props;

  return (
    <div>
      <Wrap>
        <div className="intro">
          <div className="date">
            <div className="start-date">{startDate}</div>
            <div className="end-date">{endDate}</div>
          </div>
          <div className="child-title">{title}</div>
        </div>
        <div className="des">{des}</div>
      </Wrap>
    </div>
  );
};

export default History;

const Wrap = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 2.2em 2em 3.2em 2em;
  border-bottom: 0.2px solid #b4b4b4a2;
  .intro {
    min-width: 42%;
    display: flex;
    justify-content: space-between;
    .date {
      display: flex;
      justify-content: space-between;
      .start-date {
        ::after {
          content: '-';
          margin: 0px 7px;
        }
      }
      .end-date {
        margin-left: 5px;
      }
    }
    .child-title {
      max-width: 58%;
      font-size: 22px;
      font-weight: 600;
    }
  }
  .des {
    max-width: 50%;
    text-align: center;
  }
`;

History.defaultProps = {
  startDate: '2020.05.01',
  endDate: '2020.05.01',
  title: '심서현 프로젝트 빨리 마무리 하자',
  des: '아아아아아아아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ아아아아아아아아아아아아아아ㅏㅇ아아아아아ㅏ아아아아아아아아하드코딩재밌다',
};
