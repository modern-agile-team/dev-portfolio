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
var Image = function (_a) {
    var src = _a.src, subhead = _a.subhead, head = _a.head;
    return (_jsx(Wrap, { children: _jsxs(Items, { children: [_jsx("div", __assign({ className: "imgWrap" }, { children: _jsx("img", { src: src }) })), _jsxs("div", __assign({ className: "imgDes" }, { children: [_jsx("p", { children: subhead }), _jsx("span", { children: head })] }))] }) }));
};
export default Image;
Image.defaultProps = {
    subhead: 'Write your subhead',
    head: 'script your head',
};
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  display: inline;\n"], ["\n  display: flex;\n  justify-content: center;\n  display: inline;\n"])));
var Items = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 0.5em;\n  .imgWrap {\n    overflow: hidden;\n  }\n  img {\n    width: 100%;\n    transition: 0.6s;\n    object-fit: cover;\n    :hover {\n      transform: scale(105%);\n    }\n  }\n  .imgDes {\n    p {\n      margin: 5px 0px 2px 1px;\n      font-size: 14px;\n    }\n    span {\n      font-size: 22px;\n      font-weight: 800;\n    }\n    margin-bottom: 10px;\n  }\n"], ["\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 0.5em;\n  .imgWrap {\n    overflow: hidden;\n  }\n  img {\n    width: 100%;\n    transition: 0.6s;\n    object-fit: cover;\n    :hover {\n      transform: scale(105%);\n    }\n  }\n  .imgDes {\n    p {\n      margin: 5px 0px 2px 1px;\n      font-size: 14px;\n    }\n    span {\n      font-size: 22px;\n      font-weight: 800;\n    }\n    margin-bottom: 10px;\n  }\n"])));
var templateObject_1, templateObject_2;
