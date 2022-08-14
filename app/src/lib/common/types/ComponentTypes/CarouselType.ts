import React, { ReactElement } from 'react';

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
  arrowLocation?: 'bottom' | 'mid-side' | 'top' | 'bottom-side' | 'top-side';
  playerLocation?: 'bottom-mid' | 'bottom-left' | 'bottom-right' | 'top-mid' | 'top-left' | 'top-right';
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

export interface ArrowLocationType {
  top?: string;
  bottom?: string;
  side?: string;
  translateY?: string;
}

export interface PlayerLocationType {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  translateX?: string;
}
