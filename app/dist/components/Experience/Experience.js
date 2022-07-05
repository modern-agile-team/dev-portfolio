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
import History from './History';
var Experience = function (_a) {
    var historyList = _a.historyList, title = _a.title, textAlign = _a.textAlign, background = _a.background;
    return (_jsxs(Wrap, __assign({ textAlign: textAlign, background: background }, { children: [_jsx("div", __assign({ className: "title" }, { children: title })), _jsx("hr", {}), _jsx(ChildWrap, { children: historyList === null || historyList === void 0 ? void 0 : historyList.map(function (_a, idx) {
                    var startDate = _a.startDate, endDate = _a.endDate, title = _a.title, des = _a.des;
                    return (_jsx(History, { startDate: startDate, endDate: endDate, title: title, des: des }, idx));
                }) })] })));
};
export default Experience;
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
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 25px;\n  text-align: ", ";\n  background: ", ";\n  .title {\n    padding: 10px 10px 20px 10px;\n    font-size: 33px;\n    font-weight: 800;\n  }\n  hr {\n    border: 0;\n    height: 1.5px;\n    background: #d6d6d6;\n  }\n"], ["\n  padding: 25px;\n  text-align: ", ";\n  background: ", ";\n  .title {\n    padding: 10px 10px 20px 10px;\n    font-size: 33px;\n    font-weight: 800;\n  }\n  hr {\n    border: 0;\n    height: 1.5px;\n    background: #d6d6d6;\n  }\n"])), function (_a) {
    var textAlign = _a.textAlign;
    return textAlign !== null && textAlign !== void 0 ? textAlign : 'left';
}, function (_a) {
    var background = _a.background;
    return background !== null && background !== void 0 ? background : 'left';
});
var ChildWrap = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var templateObject_1, templateObject_2;
