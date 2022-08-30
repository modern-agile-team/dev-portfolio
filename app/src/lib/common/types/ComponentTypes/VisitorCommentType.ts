export interface VisitorCommentPropsType {
  id?: string;
  commentList?: VisitorCommentListType[];
  theme?: VisitorCommentThemeType;
  backgroundColor?: string;
  buttonColor?: string;
  commentInputProps?: CommentInputPropsType;
  desPlaceholder?: string;
  nicknamePlaceholder?: string;
  passwordPlaceholder?: string;
  inputBackgroundColor?: string;
  userInputLineColor?: string;
  progressbarColor?: string;
  isShowScrollDownIcon?: boolean;
  scrollDownIconColor?: string;
}

export interface VisitorCommentListType {
  des?: string;
  nickname?: string;
  date?: string;
}

export interface IndexPropsType extends VisitorCommentListType {
  theme?: VisitorCommentThemeType;
}

export interface CommentInputPropsType {
  desPlaceholder?: string;
  nicknamePlaceholder?: string;
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
}
