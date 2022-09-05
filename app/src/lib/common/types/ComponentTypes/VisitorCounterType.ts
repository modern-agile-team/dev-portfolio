export interface VisitorCounterPropsType {
  title: string;
  todayVisitor: number;
  totalVisitor: number;
  todayTitle?: string;
  totalTitle?: string;
  backgroundColor?: string;
  size?: string;
  todayBoldColor?: string;
  totalBoldColor?: string;
}

export interface IndexPropsType extends VisitorCounterPropsType {
  theme?: VisitorCounterThemeType;
}

type VisitorCounterThemeType = 'default' | 'big-size' | 'simple';

export interface VisitorCounterStylePropsType {
  backgroundColor?: string;
  size?: string;
  todayBoldColor?: string;
  totalBoldColor?: string;
}
