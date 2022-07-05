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
import styled from 'styled-components';
var History = function (props) {
    var startDate = props.startDate, endDate = props.endDate, title = props.title, des = props.des;
    return (_jsx("div", { children: _jsxs(Wrap, { children: [_jsxs("div", __assign({ className: "intro" }, { children: [_jsxs("div", __assign({ className: "date" }, { children: [_jsx("div", __assign({ className: "start-date" }, { children: startDate })), _jsx("div", __assign({ className: "end-date" }, { children: endDate }))] })), _jsx("div", __assign({ className: "child-title" }, { children: title }))] })), _jsx("div", __assign({ className: "des" }, { children: des }))] }) }));
};
export default History;
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 85%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-around;\n  padding: 2.2em 2em 3.2em 2em;\n  border-bottom: 0.2px solid #b4b4b4a2;\n  white-space: pre-wrap;\n  .intro {\n    min-width: 42%;\n    display: flex;\n    justify-content: space-around;\n    .date {\n      display: flex;\n      justify-content: space-between;\n      .start-date {\n        ::after {\n          content: '-';\n          margin: 0px 7px;\n        }\n      }\n      .end-date {\n        margin-left: 5px;\n      }\n    }\n    .child-title {\n      width: 58%;\n      font-size: 22px;\n      font-weight: 600;\n      text-align: center;\n    }\n  }\n  .des {\n    width: 50%;\n    text-align: center;\n  }\n"], ["\n  width: 85%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-around;\n  padding: 2.2em 2em 3.2em 2em;\n  border-bottom: 0.2px solid #b4b4b4a2;\n  white-space: pre-wrap;\n  .intro {\n    min-width: 42%;\n    display: flex;\n    justify-content: space-around;\n    .date {\n      display: flex;\n      justify-content: space-between;\n      .start-date {\n        ::after {\n          content: '-';\n          margin: 0px 7px;\n        }\n      }\n      .end-date {\n        margin-left: 5px;\n      }\n    }\n    .child-title {\n      width: 58%;\n      font-size: 22px;\n      font-weight: 600;\n      text-align: center;\n    }\n  }\n  .des {\n    width: 50%;\n    text-align: center;\n  }\n"])));
var templateObject_1;
