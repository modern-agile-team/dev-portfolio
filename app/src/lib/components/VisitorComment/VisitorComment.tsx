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

/**
 *
 * @props id: Name to be added to Sidebar
 * @props commentList: List of Comment
 * @commentList des: Description of your comment
 * @commentList nickname: Nickname to display
 * @commentList date: Day when comment written
 * @props theme: Theme of Visitor Comment Component (default: basic) "basic" | "box" | "vertical"
 * @props backgroundColor: Background color of area that out of comment list component (default: whitesmoke)
 * @props buttonColor: Text color of Send Button (default: #1877f2)
 * @props commentInputProps: Placeholder of inputs description, nickname and password
 * @props inputBackgroundColor: Background color of input area (default: white)
 * @props userInputLineColor: Color of bottom border used in nickname and password area (defualt: #b4b4b4a2)
 * @props progressbarColor: Color of progressbar appearing when if comment list overflowed comment area (default: #5f5f5f)
 * @props isShowScrollDownIcon: Flag wheter show scroll down icon (default: true)
 * @props scrollDownIconColor: Color of scroll down icon (default: black)
 * @commentInputProps desPlaceholder: Placeholder of description area (default: 'write your description...')
 * @commentInputProps nicknamePlaceholder: Placeholder of nickname area (default: 'ID')
 * @commentInputProps passwordPlaceholder: Placeholder of password area (default: 'PW')
 */
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
        <ProgressBar
          isHiddenRateText={false}
          rate={`${rate}%`}
          height="3px"
          colorFrom={progressbarColor}
          colorTo={progressbarColor}
        />
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
      des: 'By looking at your portfolio, visitors can leave a guest book.',
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
    {
      des: `A personal server can be built through environmental variables, and visitors can write their text and nicknames.`,
      nickname: 'woorim960',
      date: '2022-08-26',
    },
    {
      des: 'Users can delete it after creating it.',
      nickname: 'soonki-98',
      date: '2022-08-26',
    },
    {
      des: `Refer to dev-portfolio README.md for instructions on building a personal server.`,
      nickname: 'jisu3817',
      date: '2022-08-26',
    },
    {
      des: `Likewise, there are three themes for guest book design, and progress bar customization is also possible when creating a scroll.`,
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
    {
      des: `The scroll customization method is the same as the teckstack component progress bar, so please use it!`,
      nickname: 'woorim960',
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
