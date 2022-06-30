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
var Image = function (_a) {
    var src = _a.src, subhead = _a.subhead, head = _a.head;
    return (react_1.default.createElement(Wrap, null,
        react_1.default.createElement(Items, null,
            react_1.default.createElement("div", { className: "imgWrap" },
                react_1.default.createElement("img", { src: src })),
            react_1.default.createElement("div", { className: "imgDes" },
                react_1.default.createElement("p", null, subhead),
                react_1.default.createElement("span", null, head)))));
};
exports.default = Image;
Image.defaultProps = {
    subhead: 'Write your subhead',
    head: 'script your head',
};
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  display: inline;\n"], ["\n  display: flex;\n  justify-content: center;\n  display: inline;\n"])));
var Items = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 0.5em;\n  .imgWrap {\n    overflow: hidden;\n  }\n  img {\n    width: 100%;\n    transition: 0.6s;\n    object-fit: cover;\n    :hover {\n      transform: scale(105%);\n    }\n  }\n  .imgDes {\n    p {\n      margin: 5px 0px 2px 1px;\n      font-size: 14px;\n    }\n    span {\n      font-size: 22px;\n      font-weight: 800;\n    }\n    margin-bottom: 10px;\n  }\n"], ["\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 0.5em;\n  .imgWrap {\n    overflow: hidden;\n  }\n  img {\n    width: 100%;\n    transition: 0.6s;\n    object-fit: cover;\n    :hover {\n      transform: scale(105%);\n    }\n  }\n  .imgDes {\n    p {\n      margin: 5px 0px 2px 1px;\n      font-size: 14px;\n    }\n    span {\n      font-size: 22px;\n      font-weight: 800;\n    }\n    margin-bottom: 10px;\n  }\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=Image.js.map