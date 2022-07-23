import React from 'react';
import styled from 'styled-components';
import { IntroOptionType } from '../../common/types/intro';
import { IntroTitle, IntroForm } from './index';

interface Props {
  textAlign?: 'left' | 'center';
  backgroundColor?: string;
  introOption?: IntroOptionType;
}

const Intro = ({ introOption = IntroOptionDefault, textAlign, backgroundColor }: Props) => {
  return (
    <Wrap textAlign={textAlign} backgroundColor={backgroundColor}>
      <IntroTitle introOption={introOption} />
      <IntroForm introDes={introOption} />
    </Wrap>
  );
};

export default Intro;

const Wrap = styled.div<{
  textAlign?: string;
  backgroundColor?: string;
}>`
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 20px;
  white-space: pre-wrap; //줄바꿈 인식
  text-align: ${({ textAlign }) => textAlign};
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'whitesmoke'};
`;

const IntroOptionDefault = {
  title: 'Intro',
  shortIntro: 'shortIntro that will captivate people',
  description:
    'This props name is description.\nPlease write down your brief introduction here.\nIf you want to change the line, type backslash-n between the letters.\nAlso you want to move the letters to the center, change textAlign to center.\n\nSpread your dreams!',
};
