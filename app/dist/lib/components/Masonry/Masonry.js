"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Masonry = function (_a) {
    var children = _a.children, padding = _a.padding, column = _a.column;
    return (react_1.default.createElement(Wrap, { padding: padding, column: column }, children));
};
exports.default = Masonry;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n  column-count: ", ";\n  column-gap: 1.5em;\n"], ["\n  padding: ", ";\n  column-count: ", ";\n  column-gap: 1.5em;\n"])), function (_a) {
    var padding = _a.padding;
    return padding !== null && padding !== void 0 ? padding : '2em 4em';
}, function (_a) {
    var column = _a.column;
    return column !== null && column !== void 0 ? column : 4;
});
var templateObject_1;
//# sourceMappingURL=Masonry.js.map