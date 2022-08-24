export interface VisitorCounterType {
  title: string;
  todayVisitor: number;
  totalVisitor: number;
  todayTitle?: string;
  totalTitle?: string;
}

export interface IndexPropsType extends VisitorCounterType {
  theme?: VisitorCounterThemeType;
}

type VisitorCounterThemeType = 'default' | 'big-size' | 'simple';
