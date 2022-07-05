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
import styled, { keyframes } from 'styled-components';
var ProgressBar = function (_a) {
    var _b = _a.rate, rate = _b === void 0 ? '100%' : _b, _c = _a.colorFrom, colorFrom = _c === void 0 ? 'red' : _c, _d = _a.colorTo, colorTo = _d === void 0 ? 'white' : _d;
    return (_jsxs(ProgressBarContainer, { children: [_jsx(ProgressBarComplete, __assign({ progressColor: { from: colorFrom, to: colorTo }, style: { width: rate } }, { children: _jsx(ProgressBarLiquid, { progressColor: { from: colorFrom, to: colorTo } }) })), _jsx(ProgressBarInnerText, { children: rate })] }));
};
export default ProgressBar;
ProgressBar.defaultProps = {
    rate: '100%',
    colorFrom: 'red',
    colorTo: 'white',
};
var g = function (_a) {
    var from = _a.from, to = _a.to;
    return keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% { \n    background-color: ", "; \n  }\n  50% { \n    background-color: ", "; \n  }\n  100% { \n    background-color: ", "; \n  }\n"], ["\n  0% { \n    background-color: ", "; \n  }\n  50% { \n    background-color: ", "; \n  }\n  100% { \n    background-color: ", "; \n  }\n"])), to || '#434521', from || '#607e9e', to || '#434521');
};
var r = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from { \n    transform: rotate(0deg); \n  }\n  from { \n    transform: rotate(360deg); \n  }\n"], ["\n  from { \n    transform: rotate(0deg); \n  }\n  from { \n    transform: rotate(360deg); \n  }\n"])));
var ProgressBarContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n  height: 50px;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  background: whitesmoke;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n  height: 50px;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  background: whitesmoke;\n"])));
var ProgressBarComplete = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0px;\n  height: 100%;\n  background-color: #5225bd;\n  border-radius: 10px;\n  animation: ", " 2500ms infinite ease-in-out;\n  z-index: 2;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0px;\n  height: 100%;\n  background-color: #5225bd;\n  border-radius: 10px;\n  animation: ", " 2500ms infinite ease-in-out;\n  z-index: 2;\n"])), function (_a) {
    var progressColor = _a.progressColor;
    return g(progressColor !== null && progressColor !== void 0 ? progressColor : {});
});
var ProgressBarLiquid = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  z-index: 1;\n  width: 70px;\n  height: 70px;\n  animation: ", " 2500ms infinite ease-in-out,\n    ", " 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);\n  position: absolute;\n  right: -5px;\n  top: -10px;\n  background-color: #5225bd;\n  border-radius: 40%;\n"], ["\n  z-index: 1;\n  width: 70px;\n  height: 70px;\n  animation: ", " 2500ms infinite ease-in-out,\n    ", " 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);\n  position: absolute;\n  right: -5px;\n  top: -10px;\n  background-color: #5225bd;\n  border-radius: 40%;\n"])), function (_a) {
    var progressColor = _a.progressColor;
    return g(progressColor !== null && progressColor !== void 0 ? progressColor : {});
}, r);
var ProgressBarInnerText = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  z-index: 2;\n"], ["\n  z-index: 2;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
