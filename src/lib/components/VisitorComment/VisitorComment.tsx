import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  VisitorCommentPropsType,
  VisitorCommentStyledPropsType,
} from '../../common/types/ComponentTypes/VisitorCommentType';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { ProgressBar } from '../ProgressBar';
import { uuidv4 } from '../../common/utils';

/**
 *
 * @props id: Name to be added to Sidebar
 * @props commentList: List of Comment
 * @commentList description: Description of your comment
 * @commentList nickname: Nickname to display
 * @commentList date: Day when comment written
 * @props theme: Theme of Visitor Comment Component (default: basic) "basic" | "box" | "vertical"
 * @props backgroundColor: Background color of area that out of comment list component (default: whitesmoke)
 * @props buttonColor: Text color of Send Button (default: #1877f2)
 * @props commentInputPlacehoder: Placeholder of inputs description, nickname and password
 * @props inputBackgroundColor: Background color of input area (default: white)
 * @props inputFontColor: Font Color in input box when create comment, user infomation (default: black)
 * @props inputPlacehoderColor: Placehoder font Color in input comment, user infomation boxes (default: black)
 * @props userInputLineColor: Color of bottom border used in nickname and password area (defualt: #b4b4b4a2)
 * @props listBackgroundColor: Background color of comment list (default: white)
 * @props listCommentColor: Color of comment in comment list (default: black)
 * @props listNicknameColor: Color of nickname in comment list (default: #959595)
 * @props listDateColor: Color of date in comment list (default: #959595)
 * @props progressbarColor: Color of progressbar appearing when if comment list overflowed comment area (default: #5f5f5f)
 * @props isShowScrollDownIcon: Flag wheter show scroll down icon (default: true)
 * @props scrollDownIconColor: Color of scroll down icon (default: black)
 * @commentInputPlacehoder desPlaceholder: Placeholder of description area (default: 'write your description...')
 * @commentInputPlacehoder nicknamePlaceholder: Placeholder of nickname area (default: 'ID')
 * @commentInputPlacehoder passwordPlaceholder: Placeholder of password area (default: 'PW')
 */

const VisitorComment = (props: VisitorCommentPropsType) => {
  const {
    id,
    commentList,
    theme,
    backgroundColor,
    buttonColor,
    descriptionPlaceholder,
    nicknamePlaceholder,
    passwordPlaceholder,
    inputBackgroundColor,
    userInputLineColor,
    progressbarColor,
    isShowScrollDownIcon,
    scrollDownIconColor,
    comment,
    nickname,
    password,
    handleCreateComment,
    handleChangeDescription,
    handleChangeNickname,
    handleChangePassword,
    listBackgroundColor,
    listCommentColor,
    inputFontColor,
    inputPlacehoderColor,
    listNicknameColor,
    listDateColor,
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
    const result = (scrollTop / (containerHeight - scrollHeight)) * -100;
    setRate(result);
  };

  return (
    <Wrap id={id} backgroundColor={backgroundColor} scrollDownIconColor={scrollDownIconColor}>
      {isShowScrollDownIcon && isOverflow && <HiChevronDoubleDown />}
      <CommentInput
        theme={theme}
        buttonColor={buttonColor}
        descriptionPlaceholder={descriptionPlaceholder}
        nicknamePlaceholder={nicknamePlaceholder}
        passwordPlaceholder={passwordPlaceholder}
        inputBackgroundColor={inputBackgroundColor}
        userInputLineColor={userInputLineColor}
        handleCreateComment={handleCreateComment}
        handleChangeDescription={handleChangeDescription}
        handleChangeNickname={handleChangeNickname}
        handleChangePassword={handleChangePassword}
        comment={comment}
        nickname={nickname}
        password={password}
        inputFontColor={inputFontColor}
        inputPlacehoderColor={inputPlacehoderColor}
      />
      {isOverflow && (
        <ProgressBar
          isHiddenRateText={true}
          rateText={`${rate}%`}
          height="3px"
          colorFrom={progressbarColor}
          colorTo={progressbarColor}
          animationType="none"
        />
      )}
      <ChildWrap ref={ref} onScroll={scrollHandler} theme={theme} listCommentColor={listCommentColor}>
        {commentList
          ?.slice(0)
          .reverse()
          .map((elements, idx) => (
            <CommentList
              key={uuidv4()}
              {...elements}
              theme={theme}
              listBackgroundColor={listBackgroundColor}
              listNicknameColor={listNicknameColor}
              listDateColor={listDateColor}
            />
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
      description: `The scroll customization method is the same as the teckstack component progress bar, so please use it!`,
      nickname: 'woorim960',
      date: '2022-08-26',
    },
    {
      description: `Progress bar customization is also possible when creating a scroll.`,
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
    {
      description: `Likewise, there are three types of themes: basic, box, and vertical.`,
      nickname: 'jisu3817',
      date: '2022-08-26',
    },
    {
      description: 'Refer to dev-portfolio README.md for instructions on building a personal server.',
      nickname: 'soonki-98',
      date: '2022-08-26',
    },
    {
      description: `A personal server can be built through environmental variables, and visitors can write their text and nicknames.`,
      nickname: 'woorim960',
      date: '2022-08-26',
    },
    {
      description: 'By looking at your portfolio, visitors can leave a guest book.',
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
  }
`;

const ChildWrap = styled.div<VisitorCommentStyledPropsType>`
  color: ${({ listCommentColor }) => listCommentColor ?? 'black'};
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
  justify-content: ${({ theme }) => (theme === 'vertical' ? 'space-around' : 'none')};
`;
