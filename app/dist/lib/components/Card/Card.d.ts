import React from 'react';
interface Props {
    children?: React.ReactChild;
    width?: string;
    height?: string;
    shape?: 'square' | 'round-square' | 'round';
    hover?: 'up' | 'down' | 'zoom';
}
declare const Card: ({ children, width, height, shape, hover }: Props) => JSX.Element;
export default Card;
