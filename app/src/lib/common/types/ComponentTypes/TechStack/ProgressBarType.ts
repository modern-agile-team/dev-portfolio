export interface ProgressBarPropsType {
  rate?: string;
  colorFrom?: string;
  colorTo?: string;
  width?: string;
  height?: string;
}

export interface ProgressBarContainerStyledPropsType {
  width?: string;
  height?: string;
}

export interface ProgreeBarColorType {
  from?: string;
  to?: string;
}

export interface ProgressBarCompleteStyledPropsType {
  progressColor: ProgreeBarColorType;
}
