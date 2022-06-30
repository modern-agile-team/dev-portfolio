"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Logo_1 = __importDefault(require("./Logo"));
var SideContainer_1 = __importDefault(require("./SideContainer/SideContainer"));
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: sticky;\n  top: 0;\n  z-index: 10000;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: ", ";\n  width: ", ";\n  background-color: ", ";\n"], ["\n  position: sticky;\n  top: 0;\n  z-index: 10000;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: ", ";\n  width: ", ";\n  background-color: ", ";\n"])), function (_a) {
    var headerHeight = _a.headerHeight;
    return headerHeight !== null && headerHeight !== void 0 ? headerHeight : '100px';
}, function (_a) {
    var headerWidth = _a.headerWidth;
    return headerWidth !== null && headerWidth !== void 0 ? headerWidth : '100%';
}, function (_a) {
    var headerBackgroundColor = _a.headerBackgroundColor;
    return headerBackgroundColor !== null && headerBackgroundColor !== void 0 ? headerBackgroundColor : 'whitesmoke';
});
var logoOptionDefault = {
    uriToMove: '/',
    logoImg: undefined,
    title: 'dev-portfolio',
    styles: {
        logoMargin: '0px 16px 0px 16px',
        titleColor: 'black',
        titleSize: '32px',
        titleWeight: '800',
    },
};
var channelsDefault = [
    { name: 'github', uriToMove: 'https://', color: '#181717BB', size: '30px' },
    { name: 'naver', uriToMove: 'https://', color: '#47A141BB', size: '30px' },
    { name: 'facebook', uriToMove: 'https://', color: '#1877F2BB', size: '30px' },
    { name: 'youtube', uriToMove: 'https://', color: '#FF0000BB', size: '30px' },
];
var sideBarOptionDefault = {
    mainTitle: 'dev-portfolio',
    items: [],
    styles: { size: '50px', margin: '0px 12px 0px 24px' },
};
var Header = function (_a) {
    var _b = _a.logoOption, logoOption = _b === void 0 ? logoOptionDefault : _b, _c = _a.channels, channels = _c === void 0 ? channelsDefault : _c, _d = _a.sideBarOption, sideBarOption = _d === void 0 ? sideBarOptionDefault : _d;
    return (React.createElement(Container, { id: "Header" },
        React.createElement(Logo_1.default, { logoOption: __assign(__assign({}, logoOptionDefault), logoOption) }),
        React.createElement(SideContainer_1.default, { channels: channels, sideBarOption: __assign(__assign({}, sideBarOptionDefault), sideBarOption) })));
};
exports.default = Header;
var templateObject_1;
//# sourceMappingURL=Header.js.map