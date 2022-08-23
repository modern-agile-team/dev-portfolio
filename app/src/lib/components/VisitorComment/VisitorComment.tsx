import styled from 'styled-components';
import {
  ExperiencePropsType,
  ExperienceStyledPropsType,
  ExperienceChildStyledPropsType,
} from '../../common/types/ComponentTypes/ExperienceType';
import CommentList from './CommentList';

const VisitorComment = (props: ExperiencePropsType) => {
  const { id, historyList, title, textAlign, background, theme, verticalOption } = props;

  return (
    <Wrap theme={theme} id={id} textAlign={textAlign} background={background}>
      <CommentInput>
        <input className="des" type="text" placeholder="write your description" />
        <div className="info">
          <input className="nickname" type="text" placeholder="ID" />
          <input className="date" type="password" placeholder="PW" />
        </div>
      </CommentInput>
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
  background-color: whitesmoke; //props
  padding: 1em 5em;
  padding-top: 0;
  display: flex;
  flex-direction: column;
`;

const CommentInput = styled.div`
  margin: 1em;
  display: flex;
  align-items: center;
  border: 0.2px solid #b4b4b4a2;
  background-color: white;
  padding: 1em 5em;
  input {
    outline: none;
    border: none;
    height: 25px;
    font-size: 15px;
    :focus::-webkit-input-placeholder {
      opacity: 0;
    }
  }
  .des {
    flex-grow: 2;
    max-width: 50em;
  }
  .info {
    flex-grow: 1;
    padding-left: 10em;
    display: flex;
    flex-direction: column;
    text-align: right;
    gap: 10px;
    font-size: 14px;
    color: #959595;
    .nickname {
      font-weight: bold;
    }
    input {
      text-align: right;
    }
  }
`;

const ChildWrap = styled.div`
  border: 0.2px solid #b4b4b4a2;
  border-bottom: 0px;
`;
