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
var History_1 = __importDefault(require("./History"));
var Experience = function (_a) {
    var historyList = _a.historyList, title = _a.title, textAlign = _a.textAlign, background = _a.background;
    return (react_1.default.createElement(Wrap, { textAlign: textAlign, background: background },
        react_1.default.createElement("div", { className: "title" }, title),
        react_1.default.createElement("hr", null),
        react_1.default.createElement(ChildWrap, null, historyList === null || historyList === void 0 ? void 0 : historyList.map(function (_a, idx) {
            var startDate = _a.startDate, endDate = _a.endDate, title = _a.title, des = _a.des;
            return (react_1.default.createElement(History_1.default, { key: idx, startDate: startDate, endDate: endDate, title: title, des: des }));
        }))));
};
exports.default = Experience;
Experience.defaultProps = {
    title: 'Experience',
    historyList: [
        {
            startDate: 'startDate',
            endDate: 'endDate',
            title: 'this is title',
            des: 'This prop name is des.\nWrite down the additional explanation you want here.\nYou can break the line to backslash-n.',
        },
        {
            startDate: 'startDate',
            endDate: 'endDate',
            title: 'this is title',
            des: "If you just want to write the date and time without the text,\ndon't worry !\nYou can write a des props just by emptying it.\nAn example is shown below.",
        },
        {
            startDate: 'startDate',
            endDate: 'endDate',
            title: 'this is title',
        },
    ],
};
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 25px;\n  text-align: ", ";\n  background: ", ";\n  .title {\n    padding: 10px 10px 20px 10px;\n    font-size: 33px;\n    font-weight: 800;\n  }\n  hr {\n    border: 0;\n    height: 1.5px;\n    background: #d6d6d6;\n  }\n"], ["\n  padding: 25px;\n  text-align: ", ";\n  background: ", ";\n  .title {\n    padding: 10px 10px 20px 10px;\n    font-size: 33px;\n    font-weight: 800;\n  }\n  hr {\n    border: 0;\n    height: 1.5px;\n    background: #d6d6d6;\n  }\n"])), function (_a) {
    var textAlign = _a.textAlign;
    return textAlign !== null && textAlign !== void 0 ? textAlign : 'left';
}, function (_a) {
    var background = _a.background;
    return background !== null && background !== void 0 ? background : 'left';
});
var ChildWrap = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=Experience.js.map