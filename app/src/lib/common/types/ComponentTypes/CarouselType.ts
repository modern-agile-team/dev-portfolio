import React, { ReactElement } from 'react';

export type ArrowLocationType = 'bottom' | 'mid-side' | 'top' | 'bottom-side' | 'top-side';
export type PlayerLocationType = 'bottom-mid' | 'bottom-left' | 'bottom-right' | 'top-mid' | 'top-left' | 'top-right';

export interface CarouselPropsType {
  id?: string;
  children: React.ReactNode;
  width?: string;
  transition?: number;
  autoplaySpeed?: number;
  slideToShow?: number;
  isArrowShow?: boolean;
  isAutoplay?: boolean;
  isAutoplayControl?: boolean;
  arrowLocation?: ArrowLocationType;
  playerLocation?: PlayerLocationType;
  prevArrowIcon?: ReactElement;
  nextArrowIcon?: ReactElement;
  startAutoplayIcon?: ReactElement;
  pauseAutoplayIcon?: ReactElement;
}

export interface useCarouselPropsType {
  children: React.ReactNode;
  slideToShow?: number;
  transition?: number;
  isAutoplay?: boolean;
  autoplaySpeed?: number;
}

/* For Styles */

export interface ArrowLocationStyledType {
  top?: string;
  bottom?: string;
  side?: string;
  translateY?: string;
}
