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
import { IntroTitle, IntroForm } from './index';
var Intro = function (_a) {
    var _b = _a.introOption, introOption = _b === void 0 ? IntroOptionDefault : _b, textAlign = _a.textAlign, background = _a.background;
    return (_jsxs(Wrap, __assign({ textAlign: textAlign, background: background }, { children: [_jsx(IntroTitle, { introOption: introOption }), _jsx(IntroForm, { introDes: introOption })] })));
};
export default Intro;
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  padding-top: 20px;\n  white-space: pre-wrap; //\uC904\uBC14\uAFC8 \uC778\uC2DD\n  text-align: ", ";\n  background-color: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  padding-top: 20px;\n  white-space: pre-wrap; //\uC904\uBC14\uAFC8 \uC778\uC2DD\n  text-align: ", ";\n  background-color: ", ";\n"])), function (_a) {
    var textAlign = _a.textAlign;
    return textAlign !== null && textAlign !== void 0 ? textAlign : 'left';
}, function (_a) {
    var background = _a.background;
    return background !== null && background !== void 0 ? background : 'whitesmoke';
});
var IntroOptionDefault = {
    title: 'Intro',
    shortIntro: 'shortIntro that will captivate people',
    description: 'This props name is description.\nPlease write down your brief introduction here.\nIf you want to change the line, type backslash-n between the letters.\nAlso you want to move the letters to the center, change textAlign to center.\n\nSpread your dreams!',
};
var templateObject_1;
