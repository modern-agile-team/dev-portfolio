import React from 'react';
import { LogoOptionType } from './Header';
declare type LogoProps = {
    logoOption: LogoOptionType;
};
declare const Logo: ({ logoOption }: LogoProps) => React.ReactElement;
export default Logo;
