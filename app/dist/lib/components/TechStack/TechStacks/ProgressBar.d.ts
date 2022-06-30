/// <reference types="react" />
interface ProgressBarType {
    rate?: string;
    colorFrom?: string;
    colorTo?: string;
}
declare const ProgressBar: {
    ({ rate, colorFrom, colorTo }: ProgressBarType): JSX.Element;
    defaultProps: {
        rate: string;
        colorFrom: string;
        colorTo: string;
    };
};
export default ProgressBar;
