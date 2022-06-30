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
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var SideBarItems_1 = __importDefault(require("./SideBarItems"));
var showUp = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    right: -40%;\n  }\n  to {\n    right: 0%;\n  }\n"], ["\n  from {\n    right: -40%;\n  }\n  to {\n    right: 0%;\n  }\n"])));
var showOut = (0, styled_components_1.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from {\n    right: 0%;\n  }\n  to {\n    right: -40%;\n  }\n"], ["\n  from {\n    right: 0%;\n  }\n  to {\n    right: -40%;\n  }\n"])));
var Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0%;\n  right: ", ";\n  z-index: 1011;\n  width: 30%;\n  max-width: 280px;\n  padding: 16px;\n  background-color: white;\n  border-radius: 10px 0px 10px 10px;\n  animation: 0.3s ", ";\n"], ["\n  position: absolute;\n  top: 0%;\n  right: ", ";\n  z-index: 1011;\n  width: 30%;\n  max-width: 280px;\n  padding: 16px;\n  background-color: white;\n  border-radius: 10px 0px 10px 10px;\n  animation: 0.3s ", ";\n"])), function (_a) {
    var isClickedSideBarIcon = _a.isClickedSideBarIcon;
    return (isClickedSideBarIcon ? '0%' : '-40%');
}, function (_a) {
    var isClickedSideBarIcon = _a.isClickedSideBarIcon;
    return (isClickedSideBarIcon ? showUp : showOut);
});
var Background = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: ", ";\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  z-index: 1010;\n  background-color: rgba(0, 0, 0, 0.65);\n"], ["\n  display: ", ";\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  z-index: 1010;\n  background-color: rgba(0, 0, 0, 0.65);\n"])), function (_a) {
    var isClickedSideBarIcon = _a.isClickedSideBarIcon;
    return (isClickedSideBarIcon ? 'block' : 'none');
});
var MainTitle = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: 20px;\n"], ["\n  font-weight: bold;\n  font-size: 20px;\n"])));
var Line = styled_components_1.default.hr(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border: 0.05px solid #00000022;\n"], ["\n  border: 0.05px solid #00000022;\n"])));
var SideBar = function (_a) {
    var mainTitle = _a.mainTitle, sideBarItems = _a.sideBarItems, isClickedSideBarIcon = _a.isClickedSideBarIcon, setIsClickedSideBarIcon = _a.setIsClickedSideBarIcon;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Container, { isClickedSideBarIcon: isClickedSideBarIcon },
            react_1.default.createElement(MainTitle, null, mainTitle),
            react_1.default.createElement(Line, null),
            react_1.default.createElement(SideBarItems_1.default, { setIsClickedSideBarIcon: setIsClickedSideBarIcon, sideBarItems: sideBarItems })),
        react_1.default.createElement(Background, { isClickedSideBarIcon: isClickedSideBarIcon, onClick: function () { return setIsClickedSideBarIcon(false); } })));
};
exports.default = SideBar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=SideBar.js.map