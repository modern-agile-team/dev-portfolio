/// <reference types="react" />
export declare type LogoOptionType = {
    uriToMove: string;
    logoImg?: string;
    title: string;
    styles?: any;
};
declare const Header: ({ logoOption, channels, sideBarOption, }: {
    logoOption?: {
        uriToMove: string;
        logoImg: undefined;
        title: string;
        styles: {
            logoMargin: string;
            titleColor: string;
            titleSize: string;
            titleWeight: string;
        };
    } | undefined;
    channels?: {
        name: string;
        uriToMove: string;
        color: string;
        size: string;
    }[] | undefined;
    sideBarOption?: {
        mainTitle: string;
        items: never[];
        styles: {
            size: string;
            margin: string;
        };
    } | undefined;
}) => JSX.Element;
export default Header;
