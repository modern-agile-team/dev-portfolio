import React, { ReactElement } from 'react';
interface Props {
    children: React.ReactNode;
    width?: string;
    transition?: number;
    autoplaySpeed?: number;
    slideToShow?: number;
    isArrowShow?: boolean;
    isAutoplay?: boolean;
    arrowLocation?: 'bottom' | 'mid-side' | 'top' | 'bottom-side' | 'top-side';
    prevArrowIcon?: ReactElement<{
        size: number;
    }>;
    nextArrowIcon?: ReactElement<{
        size: number;
    }>;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>>;
export default _default;
