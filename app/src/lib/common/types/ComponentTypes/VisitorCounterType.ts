export interface VisitorCounterDefaultType {
  title: string;
  todayVisitor: number;
  totalVisitor: number;
}

export interface IndexPropsType extends VisitorCounterDefaultType {
  theme?: VisitorCounterThemeType;
}

type VisitorCounterThemeType = 'default' | 'big-size' | 'simple';
