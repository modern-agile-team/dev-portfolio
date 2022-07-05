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
import { jsx as _jsx } from "react/jsx-runtime";
import styled, { css } from 'styled-components';
var Gallery = function (_a) {
    var children = _a.children, col = _a.col, gap = _a.gap, theme = _a.theme, padding = _a.padding;
    return (_jsx(Wrap, __assign({ padding: padding }, { children: _jsx(Wrapper, __assign({ theme: theme, col: col, gap: gap }, { children: _jsx("ul", { children: children }) })) })));
};
export default Gallery;
Gallery.defaultProps = {
    col: 3,
    gap: 'normal',
    theme: 'mid-night',
};
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n"], ["\n  padding: ", ";\n"])), function (_a) {
    var padding = _a.padding;
    return padding !== null && padding !== void 0 ? padding : '2em 10em';
});
var Wrapper = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  outline: 0px;\n  padding: 16px;\n  border-radius: 6px;\n  ul {\n    display: grid;\n    grid-template-columns: repeat(", ", 1fr);\n    padding: 0;\n    margin: 0;\n    ", "\n  }\n  .gallery-item {\n    .hover {\n      ", "\n    }\n  }\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  outline: 0px;\n  padding: 16px;\n  border-radius: 6px;\n  ul {\n    display: grid;\n    grid-template-columns: repeat(", ", 1fr);\n    padding: 0;\n    margin: 0;\n    ", "\n  }\n  .gallery-item {\n    .hover {\n      ", "\n    }\n  }\n"])), function (props) { return props.col; }, function (_a) {
    var gap = _a.gap;
    switch (gap) {
        case 'narrower':
            return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            gap: 10px;\n          "], ["\n            gap: 10px;\n          "])));
        case 'narrow':
            return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            gap: 15px;\n          "], ["\n            gap: 15px;\n          "])));
        case 'normal':
            return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            gap: 20px;\n          "], ["\n            gap: 20px;\n          "])));
        case 'wide':
            return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            gap: 25px;\n          "], ["\n            gap: 25px;\n          "])));
        case 'wider':
            return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            gap: 30px;\n          "], ["\n            gap: 30px;\n          "])));
    }
}, function (_a) {
    var theme = _a.theme;
    switch (theme) {
        case 'mid-night':
            return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n              background-color: #333333a8;\n              color: #e7e7e7;\n            "], ["\n              background-color: #333333a8;\n              color: #e7e7e7;\n            "])));
        case 'blossom':
            return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n              background-color: #b156676e;\n              color: #fff;\n            "], ["\n              background-color: #b156676e;\n              color: #fff;\n            "])));
        case 'fruits':
            return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n              background-color: #e99f2982;\n              color: #fff;\n            "], ["\n              background-color: #e99f2982;\n              color: #fff;\n            "])));
        case 'bare-bare':
            return css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n              background: linear-gradient(#c2e3f4b1, 70%, #efb630b1);\n              color: #030305;\n            "], ["\n              background: linear-gradient(#c2e3f4b1, 70%, #efb630b1);\n              color: #030305;\n            "])));
        case 'mint-chocolate':
            return css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n              background-color: #90c8b64a;\n              color: #530f0f;\n            "], ["\n              background-color: #90c8b64a;\n              color: #530f0f;\n            "])));
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
