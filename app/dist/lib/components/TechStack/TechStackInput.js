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
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var iconify_1 = require("../../dependencies/@iconify/react/dist/iconify");
var TechStackInput = function () {
    var _a = (0, react_1.useState)(''), inputValue = _a[0], setInputValue = _a[1];
    var _b = (0, react_1.useState)(false), isFocus = _b[0], setIsFocus = _b[1];
    var _c = (0, react_1.useState)([]), icons = _c[0], setIcons = _c[1];
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
    return (react_1.default.createElement(Container, { id: "TechStackInput" },
        react_1.default.createElement(Input, { type: "text", placeholder: "Please write the tech-stack", onChange: onChange, isFocus: isFocus }),
        isFocus && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Modal, { onClick: function () { return setIsFocus(false); } }, (icons === null || icons === void 0 ? void 0 : icons.length) >= 1 ? icons.map(function (icon, idx) { return (react_1.default.createElement(TechStackEachBox, { key: idx },
                react_1.default.createElement(iconify_1.Icon, { icon: icon, fontSize: '50px' }),
                react_1.default.createElement(TechStackName, null, icon))); }) : "There are no icons you entered."),
            react_1.default.createElement(ModalBackground, { onClick: function () { return setIsFocus(false); } })))));
};
exports.default = TechStackInput;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: ", ";\n  width: ", ";\n  /* background-color: ", "; */\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: ", ";\n  width: ", ";\n  /* background-color: ", "; */\n"])), function (_a) {
    var headerHeight = _a.headerHeight;
    return headerHeight !== null && headerHeight !== void 0 ? headerHeight : '100px';
}, function (_a) {
    var headerWidth = _a.headerWidth;
    return headerWidth !== null && headerWidth !== void 0 ? headerWidth : '100%';
}, function (_a) {
    var headerBackgroundColor = _a.headerBackgroundColor;
    return headerBackgroundColor !== null && headerBackgroundColor !== void 0 ? headerBackgroundColor : 'purple';
});
var Input = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: black;\n  font-size: 24px;\n  width: 50%;\n  height: 50%;\n  padding: 0px 0px 0px 20px;\n  margin: 0px 0px 0px 30px;\n  z-index: ", ";\n  border-radius: 6px;\n"], ["\n  color: black;\n  font-size: 24px;\n  width: 50%;\n  height: 50%;\n  padding: 0px 0px 0px 20px;\n  margin: 0px 0px 0px 30px;\n  z-index: ", ";\n  border-radius: 6px;\n"])), function (_a) {
    var isFocus = _a.isFocus;
    return (isFocus ? 1011 : 0);
});
var Modal = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 120%;\n  left: 30px;\n  z-index: 1011;\n  width: 90%;\n  padding: 16px;\n  background-color: whitesmoke;\n  border-radius: 12px;\n  white-space: normal;\n"], ["\n  position: absolute;\n  top: 120%;\n  left: 30px;\n  z-index: 1011;\n  width: 90%;\n  padding: 16px;\n  background-color: whitesmoke;\n  border-radius: 12px;\n  white-space: normal;\n"])));
var ModalBackground = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  z-index: 1010;\n  background-color: rgba(0, 0, 0, 0.65);\n"], ["\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  z-index: 1010;\n  background-color: rgba(0, 0, 0, 0.65);\n"])));
var TechStackEachBox = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-block;\n  margin: 16px 16px 16px 0px;\n  border-radius: 4px;\n"], ["\n  cursor: pointer;\n  display: inline-block;\n  margin: 16px 16px 16px 0px;\n  border-radius: 4px;\n"])));
var TechStackName = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 8px 0px;\n  font-weight: bold;\n"], ["\n  margin: 8px 0px;\n  font-weight: bold;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=TechStackInput.js.map