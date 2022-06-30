/// <reference types="react" />
interface TechStackType {
    nameOption: {
        name?: string;
        size?: string;
        iconColor?: string;
    };
    progressBarOption: {
        rate?: string;
        colorTo?: string;
        colorFrom?: string;
    };
    gap?: 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider';
}
declare const TechStack: {
    (props: TechStackType): JSX.Element;
    defaultProps: {
        gap: string;
    };
};
export default TechStack;
