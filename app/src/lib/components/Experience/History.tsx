import React from 'react';
import styled from 'styled-components';

interface Props {
  startDate?: string;
  endDate?: string;
  title?: string;
  des?: string;
}

const History = (props: Props) => {
  const { startDate, endDate, title, des } = props;

  return (
    <div>
      {des ? (
        <Wrap status={true}>
          <div className="intro">
            <div className="date">
              <div className="start-date">{startDate}</div>
              <div className="end-date">{endDate}</div>
            </div>
            <div className="child-title">{title}</div>
          </div>
          <div className="des">{des}</div>
        </Wrap>
      ) : (
        <Wrap status={false}>
          <div className="intro">
            <div className="date">
              <div className="start-date">{startDate}</div>
              <div className="end-date">{endDate}</div>
            </div>
            <div className="child-title">{title}</div>
          </div>
        </Wrap>
      )}
    </div>
  );
};

export default History;

const Wrap = styled.div<{
  status?: boolean;
}>`
  width: ${({ status }) => {
    return status && '85%';
  }};
  margin: ${({ status }) => {
    return status ? '0 auto' : 0;
  }};
  display: flex;
  justify-content: ${({ status }) => {
    return status && 'space-between';
  }};
  padding: 2.2em 2em 3.2em 2em;
  border-bottom: 0.2px solid #b4b4b4a2;
  white-space: pre-wrap;
  .intro {
    text-align: center;
    min-width: ${({ status }) => {
      return status && '42%';
    }};
    display: flex;
    flex-direction: ${({ status }) => {
      return status ? null : 'column-reverse';
    }};
    justify-content: space-between;
    .date {
      display: flex;
      justify-content: ${({ status }) => {
        return status ? 'space-between' : 'center';
      }};
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
      max-width: ${({ status }) => {
        return status && '58%';
      }};
      font-size: 22px;
      font-weight: 600;
      padding: ${({ status }) => {
        return status ? null : '1em';
      }};
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
};
