"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var Gallery = function (_a) {
    var children = _a.children, col = _a.col, gap = _a.gap, theme = _a.theme, padding = _a.padding;
    return (react_1.default.createElement(Wrap, { padding: padding },
        react_1.default.createElement(Wrapper, { theme: theme, col: col, gap: gap },
            react_1.default.createElement("ul", null, children))));
};
exports.default = Gallery;
Gallery.defaultProps = {
    col: 3,
    gap: 'normal',
    theme: 'mid-night',
};
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n"], ["\n  padding: ", ";\n"])), function (_a) {
    var padding = _a.padding;
    return padding !== null && padding !== void 0 ? padding : '2em 10em';
});
var Wrapper = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  outline: 0px;\n  padding: 16px;\n  border-radius: 6px;\n  ul {\n    display: grid;\n    grid-template-columns: repeat(", ", 1fr);\n    padding: 0;\n    margin: 0;\n    ", "\n  }\n  .gallery-item {\n    .hover {\n      ", "\n    }\n  }\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  outline: 0px;\n  padding: 16px;\n  border-radius: 6px;\n  ul {\n    display: grid;\n    grid-template-columns: repeat(", ", 1fr);\n    padding: 0;\n    margin: 0;\n    ", "\n  }\n  .gallery-item {\n    .hover {\n      ", "\n    }\n  }\n"])), function (props) { return props.col; }, function (_a) {
    var gap = _a.gap;
    switch (gap) {
        case 'narrower':
            return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            gap: 10px;\n          "], ["\n            gap: 10px;\n          "])));
        case 'narrow':
            return (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            gap: 15px;\n          "], ["\n            gap: 15px;\n          "])));
        case 'normal':
            return (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            gap: 20px;\n          "], ["\n            gap: 20px;\n          "])));
        case 'wide':
            return (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            gap: 25px;\n          "], ["\n            gap: 25px;\n          "])));
        case 'wider':
            return (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            gap: 30px;\n          "], ["\n            gap: 30px;\n          "])));
    }
}, function (_a) {
    var theme = _a.theme;
    switch (theme) {
        case 'mid-night':
            return (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n              background-color: #333333a8;\n              color: #e7e7e7;\n            "], ["\n              background-color: #333333a8;\n              color: #e7e7e7;\n            "])));
        case 'blossom':
            return (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n              background-color: #b156676e;\n              color: #fff;\n            "], ["\n              background-color: #b156676e;\n              color: #fff;\n            "])));
        case 'fruits':
            return (0, styled_components_1.css)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n              background-color: #e99f2982;\n              color: #fff;\n            "], ["\n              background-color: #e99f2982;\n              color: #fff;\n            "])));
        case 'bare-bare':
            return (0, styled_components_1.css)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n              background: linear-gradient(#c2e3f4b1, 70%, #efb630b1);\n              color: #030305;\n            "], ["\n              background: linear-gradient(#c2e3f4b1, 70%, #efb630b1);\n              color: #030305;\n            "])));
        case 'mint-chocolate':
            return (0, styled_components_1.css)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n              background-color: #90c8b64a;\n              color: #530f0f;\n            "], ["\n              background-color: #90c8b64a;\n              color: #530f0f;\n            "])));
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=Gallery.js.map