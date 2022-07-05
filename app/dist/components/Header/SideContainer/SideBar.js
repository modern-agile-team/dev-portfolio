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
import styled, { keyframes } from 'styled-components';
import SideBarItems from './SideBarItems';
var showUp = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    right: -40%;\n  }\n  to {\n    right: 0%;\n  }\n"], ["\n  from {\n    right: -40%;\n  }\n  to {\n    right: 0%;\n  }\n"])));
var showOut = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from {\n    right: 0%;\n  }\n  to {\n    right: -40%;\n  }\n"], ["\n  from {\n    right: 0%;\n  }\n  to {\n    right: -40%;\n  }\n"])));
var Container = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0%;\n  right: ", ";\n  z-index: 1011;\n  width: 30%;\n  max-width: 280px;\n  padding: 16px;\n  background-color: white;\n  border-radius: 10px 0px 10px 10px;\n  animation: 0.3s ", ";\n"], ["\n  position: absolute;\n  top: 0%;\n  right: ", ";\n  z-index: 1011;\n  width: 30%;\n  max-width: 280px;\n  padding: 16px;\n  background-color: white;\n  border-radius: 10px 0px 10px 10px;\n  animation: 0.3s ", ";\n"])), function (_a) {
    var isClickedSideBarIcon = _a.isClickedSideBarIcon;
    return (isClickedSideBarIcon ? '0%' : '-40%');
}, function (_a) {
    var isClickedSideBarIcon = _a.isClickedSideBarIcon;
    return (isClickedSideBarIcon ? showUp : showOut);
});
var Background = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: ", ";\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  z-index: 1010;\n  background-color: rgba(0, 0, 0, 0.65);\n"], ["\n  display: ", ";\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  z-index: 1010;\n  background-color: rgba(0, 0, 0, 0.65);\n"])), function (_a) {
    var isClickedSideBarIcon = _a.isClickedSideBarIcon;
    return (isClickedSideBarIcon ? 'block' : 'none');
});
var MainTitle = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: 20px;\n"], ["\n  font-weight: bold;\n  font-size: 20px;\n"])));
var Line = styled.hr(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border: 0.05px solid #00000022;\n"], ["\n  border: 0.05px solid #00000022;\n"])));
var SideBar = function (_a) {
    var mainTitle = _a.mainTitle, sideBarItems = _a.sideBarItems, isClickedSideBarIcon = _a.isClickedSideBarIcon, setIsClickedSideBarIcon = _a.setIsClickedSideBarIcon;
    return (_jsxs(_Fragment, { children: [_jsxs(Container, __assign({ isClickedSideBarIcon: isClickedSideBarIcon }, { children: [_jsx(MainTitle, { children: mainTitle }), _jsx(Line, {}), _jsx(SideBarItems, { setIsClickedSideBarIcon: setIsClickedSideBarIcon, sideBarItems: sideBarItems })] })), _jsx(Background, { isClickedSideBarIcon: isClickedSideBarIcon, onClick: function () { return setIsClickedSideBarIcon(false); } })] }));
};
export default SideBar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
