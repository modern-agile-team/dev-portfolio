import React from 'react';

export interface VisitorCommentPropsType {
  /**
   * Name to be added to Sidebar
   */
  id?: string;
  /**
   * List of Comment
   */
  commentList?: VisitorCommentListType[];
  /**
   * Theme of Visitor Comment Component (default: basic) "basic" | "box" | "vertical"
   */
  theme?: VisitorCommentThemeType;
  /**
   * Background color of area that out of comment list component (default: whitesmoke)
   */
  backgroundColor?: string;
  /**
   * Text color of Send Button (default: #1877f2)
   */
  buttonColor?: string;
  /**
   * Placeholder of inputs description, nickname and password
   */
  commentInputPlacehoder?: CommentInputPlaceholderType;
  /**
   * Placeholder of description area (default: 'write your description...')
   */
  descriptionPlaceholder?: string;
  /**
   * Placeholder of nickname area (default: 'ID')
   */
  nicknamePlaceholder?: string;
  /**
   * Placeholder of password area (default: 'PW')
   */
  passwordPlaceholder?: string;
  /**
   * Background color of input area (default: white)
   */
  inputBackgroundColor?: string;
  /**
   * Color of bottom border used in nickname and password area (defualt: #b4b4b4a2)
   */
  userInputLineColor?: string;
  /**
   * Color of progressbar appearing when if comment list overflowed comment area (default: #5f5f5f)
   */
  progressbarColor?: string;
  /**
   * Flag wheter show scroll down icon (default: true)
   */
  isShowScrollDownIcon?: boolean;
  /**
   * Color of scroll down icon (default: black)
   */
  scrollDownIconColor?: string;
  handleCreateComment?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  handleChangeDescription?: (e?: React.ChangeEvent<HTMLElement>) => void;
  handleChangeNickname?: (e?: React.ChangeEvent<HTMLElement>) => void;
  handleChangePassword?: (e?: React.ChangeEvent<HTMLElement>) => void;
  comment?: string;
  nickname?: string;
  password?: string;
  listBackgroundColor?: string;
  commentColor?: string;
  inputFontColor?: string;
  inputPlacehoderColor?: string;
  listNicknameColor?: string;
  listDateColor?: string;
}

export interface VisitorCommentListType extends VisitorCommentStyledPropsType {
  /**
   * Description of your comment
   */
  description?: string;
  /**
   * Nickname to display
   */
  nickname?: string;
  /**
   * Day when comment written
   */
  date?: string;
}

export interface IndexPropsType extends VisitorCommentListType {
  theme?: VisitorCommentThemeType;
}

export interface CommentInputPlaceholderType {
  /**
   * Placeholder of description area (default: 'write your description...')
   */
  descriptionPlaceholder?: string;
  /**
   * Placeholder of nickname area (default: 'ID')
   */
  nicknamePlaceholder?: string;
  /**
   * Placeholder of password area (default: 'PW')
   */
  passwordPlaceholder?: string;
}

type VisitorCommentThemeType = 'basic' | 'box' | 'vertical';

export interface VisitorCommentStyledPropsType {
  theme?: VisitorCommentThemeType;
  backgroundColor?: string;
  buttonColor?: string;
  inputBackgroundColor?: string;
  userInputLineColor?: string;
  scrollDownIconColor?: string;
  isOverflow?: boolean;
  listBackgroundColor?: string;
  commentColor?: string;
  inputFontColor?: string;
  inputPlacehoderColor?: string;
  listNicknameColor?: string;
  listDateColor?: string;
}
