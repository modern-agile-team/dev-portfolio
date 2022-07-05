/// <reference types="react" />
interface Props {
    moveURL?: string;
    title?: string;
    description?: string;
    imgURL?: string;
}
declare const Item: {
    ({ moveURL, title, description, imgURL }: Props): JSX.Element;
    defaultProps: {
        moveURL: string;
        title: string;
        description: string;
        imgURL: string;
    };
};
export default Item;
