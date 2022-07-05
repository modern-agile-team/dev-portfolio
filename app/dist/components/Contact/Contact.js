var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import ContactForm from './ContactForm';
import AboutMe from './AboutMe';
var Contact = function (_a) {
    var _b = _a.contactOption, contactOption = _b === void 0 ? contactOptionDefault : _b;
    var aboutMeInfos = contactOption.aboutMeInfos;
    return (_jsxs(Container, __assign({ id: "Contact" }, { children: [_jsx(ContactForm, { contactOption: contactOption }), _jsx(AboutMe, { aboutMeInfos: aboutMeInfos })] })));
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  background-color: whitesmoke;\n  padding: 10px 10px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  background-color: whitesmoke;\n  padding: 10px 10px;\n"])));
var contactOptionDefault = {
    title: '안녕하세요 풀스택 개발자 박우림입니다.',
    subTitle: '저에게 관심이 생기신 분들은 아래 버튼을 눌러주세요 :D',
    buttonText: 'Want to work with me?',
    channels: [
        {
            name: 'github',
            uriToMove: 'https://',
            color: '#181717BB',
            size: '18px',
            margin: '0px 12px 0px 0px',
        },
        {
            name: 'naver',
            uriToMove: 'https://',
            color: '#47A141BB',
            size: '18px',
            margin: '0px 12px 0px 0px',
        },
        {
            name: 'facebook',
            uriToMove: 'https://',
            color: '#1877F2BB',
            size: '18px',
            margin: '0px 12px 0px 0px',
        },
        {
            name: 'youtube',
            uriToMove: 'https://',
            color: '#FF0000BB',
            size: '18px',
            margin: '0px 12px 0px 0px',
        },
    ],
    aboutMeInfos: [
        {
            title: 'Where I live',
            description: 'Gangdong-gu, Seoul, Republic of Korea',
        },
        {
            title: 'Give me a call',
            description: 'T. +82 (0)10 1234 5678',
        },
        {
            title: 'Or, why don’t you email me?',
            description: 'dev-portfolio@gmail.com',
        },
    ],
};
export default Contact;
var templateObject_1;
