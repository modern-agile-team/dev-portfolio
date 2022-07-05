import React from 'react';
interface Props {
    children: React.ReactNode;
    padding?: string;
    column?: number;
}
declare const Masonry: ({ children, padding, column }: Props) => JSX.Element;
export default Masonry;
