import React, { useRef } from 'react';
import styled from 'styled-components';
import {
  VisitorCommentPropsType,
  VisitorCommentStyledPropsType,
  VisitorCommentThemeStyledPropsType,
} from '../../common/types/ComponentTypes/VisitorCommentType';

const CommentInput = (props: VisitorCommentPropsType) => {
  const {
    theme,
    buttonColor,
    desPlaceholder,
    nicknamePlaceholder,
    passwordPlaceholder,
    inputBackgroundColor,
    userInputLineColor,
  } = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onKeyDown = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    const height = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = `${height + 8}px`;
  };

  return (
    <Wrap theme={theme} inputBackgroundColor={inputBackgroundColor} userInputLineColor={userInputLineColor}>
      <textarea ref={textareaRef} onKeyDown={onKeyDown} className="des" placeholder={desPlaceholder} />
      <InfoWrap>
        <UserInfo>
          <input className="nickname" type="text" placeholder={nicknamePlaceholder} />
          <input className="date" type="password" placeholder={passwordPlaceholder} />
        </UserInfo>
        <SubmitBtn buttonColor={buttonColor}>
          <span>send</span>
        </SubmitBtn>
      </InfoWrap>
    </Wrap>
  );
};

export default CommentInput;

CommentInput.defaultProps = {
  desPlaceholder: 'write your description...',
  nicknamePlaceholder: 'ID',
  passwordPlaceholder: 'PW',
};

const Wrap = styled.div<VisitorCommentThemeStyledPropsType>`
  margin: 1em 0;
  padding: 1.5em 3em 0em 3em;
  background-color: ${({ inputBackgroundColor }) => inputBackgroundColor ?? 'white'};
  border-radius: ${({ theme }) => (theme === 'box' ? '5px' : 'none')};
  border: ${({ inputBackgroundColor }) => inputBackgroundColor ?? '0.2px solid #b4b4b4a2'};
  box-shadow: ${({ theme }) => (theme === 'box' ? '0px 1px 3px 1px rgba(0, 0, 0, 0.14)' : 'none')};
  textarea {
    background-color: ${({ inputBackgroundColor }) => inputBackgroundColor ?? 'white'};
    outline: none;
    border: none;
    resize: none;
    padding: 10px 0 0 0;
    width: 100%;
    height: 50px;
    align-items: center;
    font-size: 16px;
    overflow: hidden;
    :focus::-webkit-input-placeholder {
      opacity: 0;
    }
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
    background-color: ${({ inputBackgroundColor }) => inputBackgroundColor ?? 'white'};
    outline: none;
    border: none;
    padding: 0;
    height: 25px;
    border-bottom: 1px solid;
    border-bottom-color: ${({ userInputLineColor }) => userInputLineColor ?? '#b4b4b4a2'};
    :focus::-webkit-input-placeholder {
      opacity: 0;
    }
    @media screen and (max-width: 768px) {
      height: 15px;
      font-size: 1vw;
      width: 10vw;
    }
    @media screen and (max-width: 500px) {
      margin: 10px 0;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 1em;
  }
`;

const UserInfo = styled.div`
  flex-grow: 3;
  display: flex;
  font-size: 14px;
  color: #959595;
  gap: 30px;
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
