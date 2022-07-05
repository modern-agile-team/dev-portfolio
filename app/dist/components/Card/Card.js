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
var Card = function (_a) {
    var children = _a.children, width = _a.width, height = _a.height, shape = _a.shape, hover = _a.hover;
    return (_jsx(CardWrap, __assign({ width: width, height: height, shape: shape, hover: hover }, { children: _jsx("div", __assign({ className: "child" }, { children: children })) })));
};
export default Card;
var CardWrap = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.14);\n  padding: 16px;\n  transition: 0.4s;\n  ", "\n  &:hover {\n    ", "\n  }\n  .child {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.14);\n  padding: 16px;\n  transition: 0.4s;\n  ", "\n  &:hover {\n    ", "\n  }\n  .child {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n"])), function (_a) {
    var width = _a.width;
    return width !== null && width !== void 0 ? width : '10em';
}, function (_a) {
    var height = _a.height;
    return height !== null && height !== void 0 ? height : '10em';
}, function (_a) {
    var shape = _a.shape;
    switch (shape) {
        case 'square':
            return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          border-radius: 0px;\n        "], ["\n          border-radius: 0px;\n        "])));
        case 'round-square':
            return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          border-radius: 13px;\n        "], ["\n          border-radius: 13px;\n        "])));
        case 'round':
            return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          border-radius: 50%;\n        "], ["\n          border-radius: 50%;\n        "])));
    }
}, function (_a) {
    var hover = _a.hover;
    switch (hover) {
        case 'up':
            return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            transform: translateY(-5%);\n          "], ["\n            transform: translateY(-5%);\n          "])));
        case 'down':
            return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            transform: translateY(5%);\n          "], ["\n            transform: translateY(5%);\n          "])));
        case 'zoom':
            return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            transform: scale(105%);\n          "], ["\n            transform: scale(105%);\n          "])));
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
