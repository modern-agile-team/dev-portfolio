/// <reference types="react" />
interface TechStackNameType {
    name?: string;
    iconColor?: string;
    size?: string;
}
declare const TechStackName: {
    (props: TechStackNameType): JSX.Element;
    defaultProps: {
        name: string;
        iconColor: string;
        size: string;
    };
};
export default TechStackName;
