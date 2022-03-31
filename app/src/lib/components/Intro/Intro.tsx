import React from 'react';
import styled from 'styled-components';
import { IntroForm } from './IntroForm';
import { IntroTitle } from './IntroTitle';

export interface IntroOptionType {
  title: string;
  shortIntro: string;
  description: string;
}

const Intro = ({ introOption = IntroOptionDefault }) => {
  return (
    <Wrap>
      <IntroTitle introOption={introOption} />
      <IntroForm introDes={introOption} />
    </Wrap>
  );
};

export default Intro;

const Wrap = styled.div<{
  introTextAlign?: string;
  introBackgroundColor?: string;
}>`
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 10px;
  white-space: pre-wrap; //줄바꿈 인식
  text-align: ${({ introTextAlign }) => introTextAlign ?? 'center'};
  background-color: ${({ introBackgroundColor }) => introBackgroundColor ?? 'whitesmoke'};
`;

const IntroOptionDefault = {
  title: 'Intro',
  shortIntro: '안녕하세요 프론트 개발자 심서현입니다.',
  description:
    '내가 생각하는 나의 성격과 친구가 생각하는 나의 성격을 비교함으로써 겉으로 보이는 나의 모습이 어떠한지 파악해볼 수 있는 웹사이트입니다.\n실제로 지인과 성격 검사를 서로 해주면서 얻은 아이디어를 바탕으로 직접 개발하였습니다.\n\n백 엔드 개발자와 협업하는 과정에 관해 많이 배울 수 있었습니다. 필요한 명세를 문서로 작성하여 소통하였고, 필요한 지식도 함께 공유하며 학습할 수 있었습니다.\nUI & UX를 깊게 고민하며 스스로 디자인하였고, 그 과정에서 canvas API 등을 활용하여 복잡한 애니메이션들을 구현했습니다.\n복수 페이지의 Next.js 웹사이트를 만들면서 라우팅, CSR, SSR, SSG에 대한 개념을 더욱 확실하게 숙지할 수 있었습니다.\nGA를 설치하여 트래픽을 파악하고 사용자의 행동을 이벤트 단위로 분석하는 방법을 알게 되었습니다.',
};
