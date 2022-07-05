/// <reference types="react" />
declare const Contact: ({ contactOption }: {
    contactOption?: {
        title: string;
        subTitle: string;
        buttonText: string;
        channels: {
            name: string;
            uriToMove: string;
            color: string;
            size: string;
            margin: string;
        }[];
        aboutMeInfos: {
            title: string;
            description: string;
        }[];
    } | undefined;
}) => JSX.Element;
export default Contact;
