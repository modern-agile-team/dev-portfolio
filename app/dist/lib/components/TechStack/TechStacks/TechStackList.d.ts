/// <reference types="react" />
interface TechStackListType {
    techStackList: {
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
    }[];
    gap?: 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider';
}
declare const TechStackList: {
    ({ techStackList, gap }: TechStackListType): JSX.Element;
    defaultProps: {
        gap: string;
    };
};
export default TechStackList;
