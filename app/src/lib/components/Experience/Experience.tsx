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
  theme?: 'basic' | 'box' | 'vertical';
  verticalOption?: {
    titleColor?: string;
    shape?: 'square' | 'round-square';
  };
}

const Experience = (props: Props) => {
  const { historyList, title, textAlign, background, theme, verticalOption } = props;

  return (
    <Wrap textAlign={textAlign} background={background}>
      <div className="title">{title}</div>
      <hr />
      <ChildWrap theme={theme}>
        {historyList?.map((elements, idx) => (
          <History {...verticalOption} key={idx} {...elements} theme={theme} />
        ))}
      </ChildWrap>
    </Wrap>
  );
};

export default Experience;

Experience.defaultProps = {
  title: 'Experience',
  theme: 'basic',
  historyList: [
    {
      startDate: '2020. 01',
      endDate: '2020. 11',
      title: '인덕대학교',
      des: '인덕대학교를 다녔다',
    },
    {
      startDate: '2021. 05. 01',
      endDate: '2022. 01. 27',
      title: '모던 애자일',
      des: `모던애자일 활동을 했음.\n맴버는 오창훈 민순기 이석호 박현우 배범수 유준상 김지수 류가희 그라고 나였다 \n2기들아 보고싶다\n잘지내니?`,
    },
    {
      startDate: '2022. 07. 23',
      endDate: '진행중',
      title: '아 집에 가고싶다',
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

const ChildWrap = styled.div<{
  theme?: 'basic' | 'box' | 'vertical';
}>`
  display: flex;
  flex-direction: ${({ theme }) => (theme === 'vertical' ? 'row' : 'column')};
  flex-wrap: ${({ theme }) => (theme === 'vertical' ? 'wrap' : 'nowrap')};
  white-space: pre-wrap;
`;
