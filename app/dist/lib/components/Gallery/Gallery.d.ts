import React from 'react';
interface Props {
    padding?: string;
    children: React.ReactNode;
    col?: number;
    gap?: 'wider' | 'wide' | 'normal' | 'narrow' | 'narrower';
    theme?: 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'mint-chocolate';
}
declare const Gallery: {
    ({ children, col, gap, theme, padding }: Props): JSX.Element;
    defaultProps: {
        col: number;
        gap: string;
        theme: string;
    };
};
export default Gallery;
