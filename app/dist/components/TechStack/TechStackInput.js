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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
var TechStackInput = function () {
    var _a = useState(''), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState(false), isFocus = _b[0], setIsFocus = _b[1];
    var _c = useState([]), icons = _c[0], setIcons = _c[1];
    var onChange = function (e) {
        var value = e.target.value;
        setInputValue(value);
        value.length >= 1 ? setIsFocus(true) : setIsFocus(false);
        if (value.length >= 2) {
            fetch("https://api.iconify.design/search?query=logos:".concat(value))
                .then(function (res) { return res.json(); })
                .then(function (res) { return setIcons(res.icons); });
        }
    };
    return (_jsxs(Container, __assign({ id: "TechStackInput" }, { children: [_jsx(Input, { type: "text", placeholder: "Please write the tech-stack", onChange: onChange, isFocus: isFocus }), isFocus && (_jsxs(_Fragment, { children: [_jsx(Modal, __assign({ onClick: function () { return setIsFocus(false); } }, { children: (icons === null || icons === void 0 ? void 0 : icons.length) >= 1 ? icons.map(function (icon, idx) { return (_jsxs(TechStackEachBox, { children: [_jsx(Icon, { icon: icon, fontSize: '50px' }), _jsx(TechStackName, { children: icon })] }, idx)); }) : "There are no icons you entered." })), _jsx(ModalBackground, { onClick: function () { return setIsFocus(false); } })] }))] })));
};
export default TechStackInput;
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: ", ";\n  width: ", ";\n  /* background-color: ", "; */\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: ", ";\n  width: ", ";\n  /* background-color: ", "; */\n"])), function (_a) {
    var headerHeight = _a.headerHeight;
    return headerHeight !== null && headerHeight !== void 0 ? headerHeight : '100px';
}, function (_a) {
    var headerWidth = _a.headerWidth;
    return headerWidth !== null && headerWidth !== void 0 ? headerWidth : '100%';
}, function (_a) {
    var headerBackgroundColor = _a.headerBackgroundColor;
    return headerBackgroundColor !== null && headerBackgroundColor !== void 0 ? headerBackgroundColor : 'purple';
});
var Input = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: black;\n  font-size: 24px;\n  width: 50%;\n  height: 50%;\n  padding: 0px 0px 0px 20px;\n  margin: 0px 0px 0px 30px;\n  z-index: ", ";\n  border-radius: 6px;\n"], ["\n  color: black;\n  font-size: 24px;\n  width: 50%;\n  height: 50%;\n  padding: 0px 0px 0px 20px;\n  margin: 0px 0px 0px 30px;\n  z-index: ", ";\n  border-radius: 6px;\n"])), function (_a) {
    var isFocus = _a.isFocus;
    return (isFocus ? 1011 : 0);
});
var Modal = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 120%;\n  left: 30px;\n  z-index: 1011;\n  width: 90%;\n  padding: 16px;\n  background-color: whitesmoke;\n  border-radius: 12px;\n  white-space: normal;\n"], ["\n  position: absolute;\n  top: 120%;\n  left: 30px;\n  z-index: 1011;\n  width: 90%;\n  padding: 16px;\n  background-color: whitesmoke;\n  border-radius: 12px;\n  white-space: normal;\n"])));
var ModalBackground = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  z-index: 1010;\n  background-color: rgba(0, 0, 0, 0.65);\n"], ["\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  z-index: 1010;\n  background-color: rgba(0, 0, 0, 0.65);\n"])));
var TechStackEachBox = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-block;\n  margin: 16px 16px 16px 0px;\n  border-radius: 4px;\n"], ["\n  cursor: pointer;\n  display: inline-block;\n  margin: 16px 16px 16px 0px;\n  border-radius: 4px;\n"])));
var TechStackName = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 8px 0px;\n  font-weight: bold;\n"], ["\n  margin: 8px 0px;\n  font-weight: bold;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
