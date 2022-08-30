export interface ProgressBarPropsType extends ProgressBarContainerStyledPropsType {
  rate?: string;
  isHiddenRateText?: boolean;
  colorFrom?: string;
  colorTo?: string;
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
