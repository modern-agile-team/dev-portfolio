var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
var IntroTitle = function (_a) {
    var introOption = _a.introOption;
    var title = introOption.title, shortIntro = introOption.shortIntro;
    return (_jsxs(Wrap, { children: [_jsx(Title, { children: title }), _jsx(ShortIntro, { children: shortIntro })] }));
};
export default IntroTitle;
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
var Title = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 0px 5px;\n  font-size: 35px;\n  font-weight: 800;\n"], ["\n  padding: 0px 5px;\n  font-size: 35px;\n  font-weight: 800;\n"])));
var ShortIntro = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 10px 5px 20px 5px;\n  font-size: 17.5px;\n  font-weight: bold;\n  animation: slide 2s;\n  @keyframes slide {\n    from {\n      margin-left: 50%;\n      width: 300%;\n    }\n\n    to {\n      margin-left: 0%;\n      width: 100%;\n    }\n  }\n"], ["\n  padding: 10px 5px 20px 5px;\n  font-size: 17.5px;\n  font-weight: bold;\n  animation: slide 2s;\n  @keyframes slide {\n    from {\n      margin-left: 50%;\n      width: 300%;\n    }\n\n    to {\n      margin-left: 0%;\n      width: 100%;\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
