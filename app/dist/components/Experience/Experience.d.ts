/// <reference types="react" />
interface Props {
    historyList?: {
        startDate?: string;
        endDate?: string;
        title?: string;
        des?: string;
    }[];
    title?: string;
    textAlign?: string;
    background?: string;
}
declare const Experience: {
    ({ historyList, title, textAlign, background }: Props): JSX.Element;
    defaultProps: {
        title: string;
        historyList: ({
            startDate: string;
            endDate: string;
            title: string;
            des: string;
        } | {
            startDate: string;
            endDate: string;
            title: string;
            des?: undefined;
        })[];
    };
};
export default Experience;
