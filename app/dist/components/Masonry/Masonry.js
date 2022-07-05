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
import styled from 'styled-components';
var Masonry = function (_a) {
    var children = _a.children, padding = _a.padding, column = _a.column;
    return (_jsx(Wrap, __assign({ padding: padding, column: column }, { children: children })));
};
export default Masonry;
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n  column-count: ", ";\n  column-gap: 1.5em;\n"], ["\n  padding: ", ";\n  column-count: ", ";\n  column-gap: 1.5em;\n"])), function (_a) {
    var padding = _a.padding;
    return padding !== null && padding !== void 0 ? padding : '2em 4em';
}, function (_a) {
    var column = _a.column;
    return column !== null && column !== void 0 ? column : 4;
});
var templateObject_1;
