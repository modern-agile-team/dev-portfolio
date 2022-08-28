import { useState } from 'react';
import styled from 'styled-components';
import {
  VisitorCommentPropsType,
  VisitorCommentStyledPropsType,
  VisitorCommentThemeStyledPropsType,
} from '../../common/types/ComponentTypes/VisitorCommentType';
import ProgressBar from '../TechStack/TechStacks/ProgressBar';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { HiChevronDoubleDown } from 'react-icons/hi';

const VisitorComment = (props: VisitorCommentPropsType) => {
  const {
    id,
    commentList,
    theme,
    backgroundColor,
    buttonColor,
    desPlaceholder,
    nicknamePlaceholder,
    passwordPlaceholder,
    inputBackgroundColor,
    userInputLineColor,
  } = props;
  const [rate, setRate] = useState<number>(0);

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;
    const result = (scrollTop / (scrollHeight - containerHeight)) * 100;
    setRate(result);
  };

  return (
    <Wrap id={id} backgroundColor={backgroundColor}>
      <CommentInput
        theme={theme}
        buttonColor={buttonColor}
        desPlaceholder={desPlaceholder}
        nicknamePlaceholder={nicknamePlaceholder}
        passwordPlaceholder={passwordPlaceholder}
        inputBackgroundColor={inputBackgroundColor}
        userInputLineColor={userInputLineColor}
      />
      <ProgressBar rate={`${rate}%`} height="3px" colorFrom="#5f5f5f" colorTo="#5f5f5f" />
      <ChildWrap onScroll={scrollHandler} theme={theme}>
        {commentList?.map((elements, idx) => (
          <CommentList key={idx} {...elements} theme={theme} />
        ))}
      </ChildWrap>
    </Wrap>
  );
};

export default VisitorComment;

VisitorComment.defaultProps = {
  theme: 'basic',
  commentList: [
    {
      des: '데프포폴 기가맥힌데요?',
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
    {
      des: `If you just want to write the date and time without the text,\ndon't worry !\nYou can write a des props just by emptying it.\nAn example is shown below.`,
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },

    {
      des: 'This prop name is des.\nWrite down the additional explanation you want here.\nYou can break the line to backslash-n.',
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
    {
      des: '하우ㅣ',
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
    {
      des: '데프포폴 기가맥힌데요?',
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
    {
      des: `If you just want to write the date and time without the text,\ndon't worry !\nYou can write a des props just by emptying it.\nAn example is shown below.`,
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },

    {
      des: 'This prop name is des.\nWrite down the additional explanation you want here.\nYou can break the line to backslash-n.',
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
    {
      des: '하위',
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
  ],
};

const Wrap = styled.div<VisitorCommentStyledPropsType>`
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'whitesmoke'};
  padding: 1em 5em;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    padding: 1em 5vw;
  }
`;

const ChildWrap = styled.div<VisitorCommentThemeStyledPropsType>`
  margin-top: 3px;
  height: ${({ theme }) => (theme === 'vertical' ? '580px' : '400px')};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  border-bottom: 0px;
  display: flex;
  white-space: pre-wrap;
  border: ${({ theme }) => (theme === 'basic' ? '0.2px solid #b4b4b4a0' : 'none')};
  flex-direction: ${({ theme }) => (theme === 'vertical' ? 'row' : 'column')};
  flex-wrap: ${({ theme }) => (theme === 'vertical' ? 'wrap' : 'nowrap')};
`;
