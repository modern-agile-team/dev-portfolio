import React, { useRef } from 'react';
import styled from 'styled-components';
import {
  VisitorCommentPropsType,
  VisitorCommentStyledPropsType,
  VisitorCommentThemeStyledPropsType,
} from '../../common/types/ComponentTypes/VisitorCommentType';

const CommentInput = (props: VisitorCommentPropsType) => {
  const { theme, buttonColor } = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onKeyDown = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    const height = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = `${height + 8}px`;
  };

  return (
    <Wrap theme={theme}>
      <textarea ref={textareaRef} onKeyDown={onKeyDown} className="des" placeholder="write your description" />
      <InfoWrap>
        <UserInfo>
          <input className="nickname" type="text" placeholder="ID" />
          <input className="date" type="password" placeholder="PW" />
        </UserInfo>
        <SubmitBtn buttonColor={buttonColor}>
          <span>send</span>
        </SubmitBtn>
      </InfoWrap>
    </Wrap>
  );
};

export default CommentInput;

const Wrap = styled.div<VisitorCommentThemeStyledPropsType>`
  margin: 1em 0;
  padding: 1.5em 3em 0em 3em;
  background-color: white;
  border-radius: ${({ theme }) => (theme === 'box' ? '5px' : 'none')};
  border: ${({ theme }) => (theme === 'box' ? 'none' : '0.2px solid #b4b4b4a2')};
  box-shadow: ${({ theme }) => (theme === 'box' ? '0px 1px 3px 1px rgba(0, 0, 0, 0.14)' : 'none')};
  textarea {
    outline: none;
    border: none;
    resize: none;
    padding: 0;
    width: 100%;
    height: 50px;
    align-items: center;
    font-size: 16px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      font-size: 1vw;
      height: 30px;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      height: 25px;
    }
  }
  input {
    outline: none;
    border: none;
    padding: 0;
    width: 100%;
    height: 25px;
    :focus::-webkit-input-placeholder {
      opacity: 0;
    }
    @media screen and (max-width: 768px) {
      height: 15px;
      font-size: 1vw;
    }
    @media screen and (max-width: 500px) {
      margin: 10px 0;
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 1em;
  }
`;

const UserInfo = styled.div`
  flex-grow: 1;
  display: flex;
  font-size: 14px;
  color: #959595;
  @media screen and (max-width: 500px) {
    flex-direction: row;
    width: 100%;
    input {
      width: 20%;
    }
  }
`;

const SubmitBtn = styled.div<VisitorCommentStyledPropsType>`
  flex-grow: 1;
  text-align: center;
  padding: 2vw 0;
  margin-left: 2vw;
  color: ${({ buttonColor }) => buttonColor ?? '#1877f2'};
  span {
    cursor: pointer;
  }
  @media screen and (max-width: 760px) {
    font-size: 1vw;
    border: none;
    margin: 0;
    margin-right: 4em;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
`;
