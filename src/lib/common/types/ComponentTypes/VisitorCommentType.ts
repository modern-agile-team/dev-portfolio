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
  /**
   * Comments Props for event handling
   */
  handleCreateComment?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Description Props for event handling
   */
  handleChangeDescription?: (e?: React.ChangeEvent<HTMLElement>) => void;
  /**
   * Nickname Props for event handling
   */
  handleChangeNickname?: (e?: React.ChangeEvent<HTMLElement>) => void;
  /**
   * Password Props for event handling
   */
  handleChangePassword?: (e?: React.ChangeEvent<HTMLElement>) => void;
  /**
   * the text of visitor comment
   */
  comment?: string;
  /**
   * the nickname of visitor comment
   */
  nickname?: string;
  /**
   * the password of visitor comment
   */
  password?: string;
  /**
   * Font Color in input box when create comment, user infomation (default: black)
   */
  inputFontColor?: string;
  /**
   * Placehoder font Color in input comment, user infomation boxes (default: black)
   */
  inputPlacehoderColor?: string;
  /**
   * Background color of comment list (default: white)
   */
  listBackgroundColor?: string;
  /**
   * Color of comment in comment list (default: black)
   */
  listCommentColor?: string;
  /**
   * Color of nickname in comment list (default: #959595)
   */
  listNicknameColor?: string;
  /**
   * Color of date in comment list (default: #959595)
   */
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

/* For Styles */

export interface VisitorCommentStyledPropsType {
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
   * Background color of input area (default: white)
   */
  inputBackgroundColor?: string;
  /**
   * Color of bottom border used in nickname and password area (defualt: #b4b4b4a2)
   */
  userInputLineColor?: string;
  /**
   * Color of scroll down icon (default: black)
   */
  scrollDownIconColor?: string;
  /**
   * Props for generating scroll events (not work)
   */
  isOverflow?: boolean;
  /**
   * Font Color in input box when create comment, user infomation (default: black)
   */
  inputFontColor?: string;
  /**
   * Placehoder font Color in input comment, user infomation boxes (default: black)
   */
  inputPlacehoderColor?: string;
  /**
   * Background color of comment list (default: white)
   */
  listBackgroundColor?: string;
  /**
   * Color of comment in comment list (default: black)
   */
  listCommentColor?: string;
  /**
   * Color of nickname in comment list (default: #959595)
   */
  listNicknameColor?: string;
  /**
   * Color of date in comment list (default: #959595)
   */
  listDateColor?: string;
}
