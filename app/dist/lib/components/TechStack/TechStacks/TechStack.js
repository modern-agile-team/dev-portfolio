"use strict";
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
var TechStackName_1 = __importDefault(require("./TechStackName"));
var ProgressBar_1 = __importDefault(require("./ProgressBar"));
var TechStack = function (props) {
    var nameOption = props.nameOption, progressBarOption = props.progressBarOption, _a = props.gap, gap = _a === void 0 ? 'normal' : _a;
    return (react_1.default.createElement(Wrapper, { gap: gap },
        react_1.default.createElement(TechStackName_1.default, __assign({}, nameOption)),
        react_1.default.createElement(ProgressBar_1.default, __assign({}, progressBarOption))));
};
exports.default = TechStack;
TechStack.defaultProps = {
    gap: 'normal',
};
var Wrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var gap = _a.gap;
    switch (gap) {
        case 'narrower':
            return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          margin: 0px 30px;\n        "], ["\n          margin: 0px 30px;\n        "])));
        case 'narrow':
            return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          margin: 10px 30px;\n        "], ["\n          margin: 10px 30px;\n        "])));
        case 'normal':
            return (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          margin: 20px 30px;\n        "], ["\n          margin: 20px 30px;\n        "])));
        case 'wide':
            return (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          margin: 30px 30px;\n        "], ["\n          margin: 30px 30px;\n        "])));
        case 'wider':
            return (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n          margin: 40px 30px;\n        "], ["\n          margin: 40px 30px;\n        "])));
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=TechStack.js.map