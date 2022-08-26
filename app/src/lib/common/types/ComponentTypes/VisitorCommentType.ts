export interface VisitorCommentPropsType {
  id?: string;
  commentList?: VisitorCommentListType[];
  theme?: VisitorCommentThemeType;
  backgroundColor?: string;
  buttonColor?: string;
}

export interface VisitorCommentListType {
  des?: string;
  nickname?: string;
  date?: string;
}

export interface IndexPropsType extends VisitorCommentListType {
  theme?: VisitorCommentThemeType;
}

type VisitorCommentThemeType = 'basic' | 'box' | 'vertical';

export interface VisitorCommentStyledPropsType {
  backgroundColor?: string;
  buttonColor?: string;
}

export interface VisitorCommentThemeStyledPropsType {
  theme?: VisitorCommentThemeType;
}
