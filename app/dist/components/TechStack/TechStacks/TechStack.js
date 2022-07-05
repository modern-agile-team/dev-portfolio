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
import styled, { css } from 'styled-components';
import TechStackName from './TechStackName';
import ProgressBarContainer from './ProgressBar';
var TechStack = function (props) {
    var nameOption = props.nameOption, progressBarOption = props.progressBarOption, _a = props.gap, gap = _a === void 0 ? 'normal' : _a;
    return (_jsxs(Wrapper, __assign({ gap: gap }, { children: [_jsx(TechStackName, __assign({}, nameOption)), _jsx(ProgressBarContainer, __assign({}, progressBarOption))] })));
};
export default TechStack;
TechStack.defaultProps = {
    gap: 'normal',
};
var Wrapper = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var gap = _a.gap;
    switch (gap) {
        case 'narrower':
            return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          margin: 0px 30px;\n        "], ["\n          margin: 0px 30px;\n        "])));
        case 'narrow':
            return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          margin: 10px 30px;\n        "], ["\n          margin: 10px 30px;\n        "])));
        case 'normal':
            return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          margin: 20px 30px;\n        "], ["\n          margin: 20px 30px;\n        "])));
        case 'wide':
            return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          margin: 30px 30px;\n        "], ["\n          margin: 30px 30px;\n        "])));
        case 'wider':
            return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n          margin: 40px 30px;\n        "], ["\n          margin: 40px 30px;\n        "])));
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
