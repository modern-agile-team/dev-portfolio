import React from 'react';
import styled from 'styled-components';
import History from './History';

interface Props {
  historyList: {
    startDate?: string;
    endDate?: string;
    title?: string;
    des?: string;
  }[];
  title?: string;
  textAlign?: string;
  background?: string;
}

const Experience = ({ historyList, title, textAlign, background }: Props) => {
  return (
    <Wrap textAlign={textAlign} background={background}>
      <div className="title">{title}</div>
      <hr />
      <ChildWrap>
        {historyList?.map(({ startDate, endDate, title, des }, idx) => (
          <History key={idx} startDate={startDate} endDate={endDate} title={title} des={des} />
        ))}
      </ChildWrap>
    </Wrap>
  );
};

export default Experience;

Experience.defaultProps = {
  title: 'Experience',
};

const Wrap = styled.div<{
  textAlign?: string;
  background?: string;
}>`
  padding: 25px;
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  background: ${({ background }) => background ?? 'left'};
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
