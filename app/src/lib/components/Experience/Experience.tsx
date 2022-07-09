import React from 'react';
import styled from 'styled-components';
import History from './History';

interface Props {
  historyList?: {
    startDate?: string;
    endDate?: string;
    title?: string;
    des?: string;
  }[];
  title?: string;
  textAlign?: string;
  background?: string;
  theme?: 'basic' | 'box';
}

const Experience = (props: Props) => {
  const { historyList, title, textAlign, background, theme } = props;

  return (
    <Wrap textAlign={textAlign} background={background}>
      <div className="title">{title}</div>
      <hr />
      <ChildWrap>
        {historyList?.map((elements, idx) => (
          <History key={idx} {...elements} theme={theme} />
        ))}
      </ChildWrap>
    </Wrap>
  );
};

export default Experience;

Experience.defaultProps = {
  title: 'Experience',
  theme: 'box',
  historyList: [
    {
      startDate: 'startDate',
      endDate: 'endDate',
      title: 'this is title',
      des: 'This prop name is des.\nWrite down the additional explanation you want here.\nYou can break the line to backslash-n.',
    },
    {
      startDate: 'startDate',
      endDate: 'endDate',
      title: 'this is title',
      des: `If you just want to write the date and time without the text,\ndon't worry !\nYou can write a des props just by emptying it.\nAn example is shown below.`,
    },
    {
      startDate: 'startDate',
      endDate: 'endDate',
      title: 'this is title',
    },
  ],
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
