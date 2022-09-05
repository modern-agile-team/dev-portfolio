import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  VisitorCommentPropsType,
  VisitorCommentStyledPropsType,
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
    progressbarColor,
    isShowScrollDownIcon,
    scrollDownIconColor,
  } = props;

  //make progressbar in commentList scroll-y
  const [rate, setRate] = useState<number>(0);
  const [isOverflow, setIsOverflow] = useState<boolean>(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const isOverflow = element.scrollHeight > element.clientHeight;
      setIsOverflow(isOverflow);
    }
  }, []);

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;
    const result = (scrollTop / (scrollHeight - containerHeight)) * 100;
    setRate(result);
  };

  return (
    <Wrap id={id} backgroundColor={backgroundColor} scrollDownIconColor={scrollDownIconColor}>
      {isShowScrollDownIcon && isOverflow && <HiChevronDoubleDown />}
      <CommentInput
        theme={theme}
        buttonColor={buttonColor}
        desPlaceholder={desPlaceholder}
        nicknamePlaceholder={nicknamePlaceholder}
        passwordPlaceholder={passwordPlaceholder}
        inputBackgroundColor={inputBackgroundColor}
        userInputLineColor={userInputLineColor}
      />
      {isOverflow && (
        <ProgressBar rate={`${rate}%`} height="3px" colorFrom={progressbarColor} colorTo={progressbarColor} />
      )}
      <ChildWrap ref={ref} onScroll={scrollHandler} theme={theme}>
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
  progressbarColor: '#5f5f5f',
  isShowScrollDownIcon: true,
  commentList: [
    {
      des: '데프포폴 기가맥힌데요?',
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
    {
      des: `어우 qa가 계속나오네`,
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
  ],
};

const Wrap = styled.div<VisitorCommentStyledPropsType>`
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'whitesmoke'};
  padding: 1em 5em;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    padding: 1em 5vw;
  }
  svg {
    position: absolute;
    bottom: 1.7em;
    left: 49.5%;
    color: ${({ scrollDownIconColor }) => scrollDownIconColor ?? 'black'};
    font-size: 1.1vw;
  }
`;

const ChildWrap = styled.div<VisitorCommentStyledPropsType>`
  margin-top: 3px;
  height: ${({ theme }) => (theme === 'vertical' ? '580px' : '400px')};
  overflow-y: scroll;
  background-color: ${({ theme }) => (theme === 'basic' ? 'white' : 'none')};
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
