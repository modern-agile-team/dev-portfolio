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
var IntroTitle = function (_a) {
    var introOption = _a.introOption;
    var title = introOption.title, shortIntro = introOption.shortIntro;
    return (react_1.default.createElement(Wrap, null,
        react_1.default.createElement(Title, null, title),
        react_1.default.createElement(ShortIntro, null, shortIntro)));
};
exports.default = IntroTitle;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
var Title = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 0px 5px;\n  font-size: 35px;\n  font-weight: 800;\n"], ["\n  padding: 0px 5px;\n  font-size: 35px;\n  font-weight: 800;\n"])));
var ShortIntro = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 10px 5px 20px 5px;\n  font-size: 17.5px;\n  font-weight: bold;\n  animation: slide 2s;\n  @keyframes slide {\n    from {\n      margin-left: 50%;\n      width: 300%;\n    }\n\n    to {\n      margin-left: 0%;\n      width: 100%;\n    }\n  }\n"], ["\n  padding: 10px 5px 20px 5px;\n  font-size: 17.5px;\n  font-weight: bold;\n  animation: slide 2s;\n  @keyframes slide {\n    from {\n      margin-left: 50%;\n      width: 300%;\n    }\n\n    to {\n      margin-left: 0%;\n      width: 100%;\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=IntroTitle.js.map