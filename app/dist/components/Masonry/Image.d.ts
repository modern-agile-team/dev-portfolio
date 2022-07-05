/// <reference types="react" />
interface Props {
    src: string;
    subhead?: string;
    head?: string;
}
declare const Image: {
    ({ src, subhead, head }: Props): JSX.Element;
    defaultProps: {
        subhead: string;
        head: string;
    };
};
export default Image;
