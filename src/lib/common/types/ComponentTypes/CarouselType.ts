import React, { ReactElement } from 'react';

export type ArrowLocationType = 'bottom' | 'mid-side' | 'top' | 'bottom-side' | 'top-side';
export type PlayerLocationType = 'bottom-mid' | 'bottom-left' | 'bottom-right' | 'top-mid' | 'top-left' | 'top-right';

export interface CarouselPropsType {
  /**
   * unique id of carousel
   */
  id?: string;
  /**
   * carousel react component children
   */
  children: React.ReactNode;
  /**
   * carousel width (default: 100%)
   */
  width?: string;
  /**
   * transition animation speed (default: 1000) (unit: ms)
   */
  transition?: number;
  /**
   * time to stay in a item (default: 3000) (unit: ms)
   */
  autoplaySpeed?: number;
  /**
   * number of item to show at once (default: 1)
   */
  slideToShow?: number;
  /**
   * flag for whether to show buttons (default: true)
   */
  isArrowShow?: boolean;
  /**
   * flag for play carousel automatically (default: false)
   */
  isAutoplay?: boolean;
  /**
   * flag for whether to show carousel player (default: true)
   */
  isAutoplayControl?: boolean;
  /**
   * position of arrows (default: 'mid-side')
   */
  arrowLocation?: ArrowLocationType;
  /**
   * position of player (default: 'bottom-mid')
   */
  playerLocation?: PlayerLocationType;
  /**
   * previous arrow button icon (default: FiChevronLeft)
   */
  prevArrowIcon?: ReactElement;
  /**
   * next arrow button icon (default: FiChevronRight)
   */
  nextArrowIcon?: ReactElement;
  /**
   * start play carousel icon (default: TbPlayerPlay)
   */
  startAutoplayIcon?: ReactElement;
  /**
   * pause carousel icon (default: TbPlayerPause)
   */
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
