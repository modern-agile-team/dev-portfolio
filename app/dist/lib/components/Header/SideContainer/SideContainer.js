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
var Channels_1 = __importDefault(require("../../Channels/Channels"));
var SideBarIcon_1 = __importDefault(require("./SideBarIcon"));
var SideBar_1 = __importDefault(require("./SideBar"));
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));
var SideContainer = function (_a) {
    var channels = _a.channels, sideBarOption = _a.sideBarOption;
    var mainTitle = sideBarOption.mainTitle, items = sideBarOption.items, styles = sideBarOption.styles;
    var _b = (0, react_1.useState)(false), isClickedSideBarIcon = _b[0], setIsClickedSideBarIcon = _b[1];
    var _c = (0, react_1.useState)(items), sideBarItems = _c[0], setSideBarItems = _c[1];
    var onClickSideBarIconHandler = function () {
        var _a;
        var $tags = (_a = document.querySelector('#root')) === null || _a === void 0 ? void 0 : _a.childNodes;
        setSideBarItems(Array.from($tags)
            .filter(function ($tag) { return $tag.id !== 'Header'; })
            .map(function ($tag) {
            return { title: $tag.id };
        }));
        setIsClickedSideBarIcon(true);
    };
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(Channels_1.default, { channels: channels }),
        react_1.default.createElement(SideBarIcon_1.default, { styles: styles, onClick: onClickSideBarIconHandler }),
        isClickedSideBarIcon && (react_1.default.createElement(SideBar_1.default, { mainTitle: mainTitle, sideBarItems: sideBarItems, isClickedSideBarIcon: isClickedSideBarIcon, setIsClickedSideBarIcon: setIsClickedSideBarIcon }))));
};
exports.default = SideContainer;
var templateObject_1;
//# sourceMappingURL=SideContainer.js.map