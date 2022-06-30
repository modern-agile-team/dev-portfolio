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
var ProgressBar = function (_a) {
    var _b = _a.rate, rate = _b === void 0 ? '100%' : _b, _c = _a.colorFrom, colorFrom = _c === void 0 ? 'red' : _c, _d = _a.colorTo, colorTo = _d === void 0 ? 'white' : _d;
    return (react_1.default.createElement(ProgressBarContainer, null,
        react_1.default.createElement(ProgressBarComplete, { progressColor: { from: colorFrom, to: colorTo }, style: { width: rate } },
            react_1.default.createElement(ProgressBarLiquid, { progressColor: { from: colorFrom, to: colorTo } })),
        react_1.default.createElement(ProgressBarInnerText, null, rate)));
};
exports.default = ProgressBar;
ProgressBar.defaultProps = {
    rate: '100%',
    colorFrom: 'red',
    colorTo: 'white',
};
var g = function (_a) {
    var from = _a.from, to = _a.to;
    return (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% { \n    background-color: ", "; \n  }\n  50% { \n    background-color: ", "; \n  }\n  100% { \n    background-color: ", "; \n  }\n"], ["\n  0% { \n    background-color: ", "; \n  }\n  50% { \n    background-color: ", "; \n  }\n  100% { \n    background-color: ", "; \n  }\n"])), to || '#434521', from || '#607e9e', to || '#434521');
};
var r = (0, styled_components_1.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from { \n    transform: rotate(0deg); \n  }\n  from { \n    transform: rotate(360deg); \n  }\n"], ["\n  from { \n    transform: rotate(0deg); \n  }\n  from { \n    transform: rotate(360deg); \n  }\n"])));
var ProgressBarContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n  height: 50px;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  background: whitesmoke;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n  height: 50px;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  background: whitesmoke;\n"])));
var ProgressBarComplete = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0px;\n  height: 100%;\n  background-color: #5225bd;\n  border-radius: 10px;\n  animation: ", " 2500ms infinite ease-in-out;\n  z-index: 2;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0px;\n  height: 100%;\n  background-color: #5225bd;\n  border-radius: 10px;\n  animation: ", " 2500ms infinite ease-in-out;\n  z-index: 2;\n"])), function (_a) {
    var progressColor = _a.progressColor;
    return g(progressColor !== null && progressColor !== void 0 ? progressColor : {});
});
var ProgressBarLiquid = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  z-index: 1;\n  width: 70px;\n  height: 70px;\n  animation: ", " 2500ms infinite ease-in-out,\n    ", " 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);\n  position: absolute;\n  right: -5px;\n  top: -10px;\n  background-color: #5225bd;\n  border-radius: 40%;\n"], ["\n  z-index: 1;\n  width: 70px;\n  height: 70px;\n  animation: ", " 2500ms infinite ease-in-out,\n    ", " 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);\n  position: absolute;\n  right: -5px;\n  top: -10px;\n  background-color: #5225bd;\n  border-radius: 40%;\n"])), function (_a) {
    var progressColor = _a.progressColor;
    return g(progressColor !== null && progressColor !== void 0 ? progressColor : {});
}, r);
var ProgressBarInnerText = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  z-index: 2;\n"], ["\n  z-index: 2;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=ProgressBar.js.map