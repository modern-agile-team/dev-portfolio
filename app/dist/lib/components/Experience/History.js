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
var History = function (props) {
    var startDate = props.startDate, endDate = props.endDate, title = props.title, des = props.des;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Wrap, null,
            react_1.default.createElement("div", { className: "intro" },
                react_1.default.createElement("div", { className: "date" },
                    react_1.default.createElement("div", { className: "start-date" }, startDate),
                    react_1.default.createElement("div", { className: "end-date" }, endDate)),
                react_1.default.createElement("div", { className: "child-title" }, title)),
            react_1.default.createElement("div", { className: "des" }, des))));
};
exports.default = History;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 85%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-around;\n  padding: 2.2em 2em 3.2em 2em;\n  border-bottom: 0.2px solid #b4b4b4a2;\n  white-space: pre-wrap;\n  .intro {\n    min-width: 42%;\n    display: flex;\n    justify-content: space-around;\n    .date {\n      display: flex;\n      justify-content: space-between;\n      .start-date {\n        ::after {\n          content: '-';\n          margin: 0px 7px;\n        }\n      }\n      .end-date {\n        margin-left: 5px;\n      }\n    }\n    .child-title {\n      width: 58%;\n      font-size: 22px;\n      font-weight: 600;\n      text-align: center;\n    }\n  }\n  .des {\n    width: 50%;\n    text-align: center;\n  }\n"], ["\n  width: 85%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-around;\n  padding: 2.2em 2em 3.2em 2em;\n  border-bottom: 0.2px solid #b4b4b4a2;\n  white-space: pre-wrap;\n  .intro {\n    min-width: 42%;\n    display: flex;\n    justify-content: space-around;\n    .date {\n      display: flex;\n      justify-content: space-between;\n      .start-date {\n        ::after {\n          content: '-';\n          margin: 0px 7px;\n        }\n      }\n      .end-date {\n        margin-left: 5px;\n      }\n    }\n    .child-title {\n      width: 58%;\n      font-size: 22px;\n      font-weight: 600;\n      text-align: center;\n    }\n  }\n  .des {\n    width: 50%;\n    text-align: center;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=History.js.map