import styled from 'styled-components';
import {
  ExperiencePropsType,
  ExperienceStyledPropsType,
  ExperienceChildStyledPropsType,
} from '../../common/types/ComponentTypes/ExperienceType';
import CommentList from './CommentList';
import { FiSend } from 'react-icons/fi';

const VisitorComment = (props: ExperiencePropsType) => {
  const { id, historyList, title, textAlign, background, theme, verticalOption } = props;

  return (
    <Wrap theme={theme} id={id} textAlign={textAlign} background={background}>
      <label className="comment-input">
        <span>nickname :</span>
        <input className="top-input" type="text" />
        <span>password :</span>
        <input className="top-input" type="password" />
        <p>comment your message</p>
        <input className="des-input" type="text" />
        <FiSend size={30} />
      </label>
      <ChildWrap>
        {historyList?.map((elements, idx) => (
          <CommentList {...verticalOption} key={idx} {...elements} theme={theme} />
        ))}
      </ChildWrap>
    </Wrap>
  );
};

export default VisitorComment;

VisitorComment.defaultProps = {
  title: 'VisitorComment',
  theme: 'basic',
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

const Wrap = styled.div<ExperienceStyledPropsType>`
  /* background-color: whitesmoke; //props */
  padding: 1em 5em;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  .comment-input {
    position: relative;
    padding: 1em;
    /* border: 1px solid; */
    span {
      margin-right: 5px;
    }
    input {
      border: 0.2px solid #b4b4b4a2;
      outline: none;
      margin-right: 10px;
      width: 8em;
      height: 25px;
      padding: 0 5px;
    }
    .des-input {
      width: 100%;
      height: 50px;
    }
    svg {
      position: absolute;
      bottom: 27px;
      right: 15px;
      color: #3e3e3e; //props
      cursor: pointer;
    }
  }
`;

const ChildWrap = styled.div`
  border: 0.2px solid #b4b4b4a2;
  border-bottom: 0px;
`;
