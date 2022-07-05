var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 10px 0px;\n"], ["\n  margin: 10px 0px;\n"])));
var AboutMeEachContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 10px 0px 10px 10px;\n"], ["\n  margin: 10px 0px 10px 10px;\n"])));
var AboutMeTitle = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: bold;\n  color: #00000066;\n"], ["\n  font-weight: bold;\n  color: #00000066;\n"])));
var AboutMe = function (_a) {
    var aboutMeInfos = _a.aboutMeInfos;
    return (_jsx(Container, { children: aboutMeInfos.map(function (_a, idx) {
            var title = _a.title, description = _a.description;
            return (_jsxs(AboutMeEachContainer, { children: [_jsx(AboutMeTitle, { children: title }), _jsx("div", { children: description })] }, idx));
        }) }));
};
export default AboutMe;
var templateObject_1, templateObject_2, templateObject_3;
