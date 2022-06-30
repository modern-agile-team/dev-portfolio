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
var Card = function (_a) {
    var children = _a.children, width = _a.width, height = _a.height, shape = _a.shape, hover = _a.hover;
    return (react_1.default.createElement(CardWrap, { width: width, height: height, shape: shape, hover: hover },
        react_1.default.createElement("div", { className: "child" }, children)));
};
exports.default = Card;
var CardWrap = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.14);\n  padding: 16px;\n  transition: 0.4s;\n  ", "\n  &:hover {\n    ", "\n  }\n  .child {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.14);\n  padding: 16px;\n  transition: 0.4s;\n  ", "\n  &:hover {\n    ", "\n  }\n  .child {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n"])), function (_a) {
    var width = _a.width;
    return width !== null && width !== void 0 ? width : '10em';
}, function (_a) {
    var height = _a.height;
    return height !== null && height !== void 0 ? height : '10em';
}, function (_a) {
    var shape = _a.shape;
    switch (shape) {
        case 'square':
            return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          border-radius: 0px;\n        "], ["\n          border-radius: 0px;\n        "])));
        case 'round-square':
            return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          border-radius: 13px;\n        "], ["\n          border-radius: 13px;\n        "])));
        case 'round':
            return (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          border-radius: 50%;\n        "], ["\n          border-radius: 50%;\n        "])));
    }
}, function (_a) {
    var hover = _a.hover;
    switch (hover) {
        case 'up':
            return (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            transform: translateY(-5%);\n          "], ["\n            transform: translateY(-5%);\n          "])));
        case 'down':
            return (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            transform: translateY(5%);\n          "], ["\n            transform: translateY(5%);\n          "])));
        case 'zoom':
            return (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            transform: scale(105%);\n          "], ["\n            transform: scale(105%);\n          "])));
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=Card.js.map