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
var iconify_1 = require("../../dependencies/@iconify/react/dist/iconify");
var Container = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n"])));
var LogoImgContainer = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: ", ";\n"], ["\n  margin: ", ";\n"])), function (_a) {
    var logoMargin = _a.logoMargin;
    return logoMargin !== null && logoMargin !== void 0 ? logoMargin : '0px 16px 0px 16px';
});
var Title = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"])), function (_a) {
    var titleColor = _a.titleColor;
    return titleColor !== null && titleColor !== void 0 ? titleColor : 'black';
}, function (_a) {
    var titleSize = _a.titleSize;
    return titleSize !== null && titleSize !== void 0 ? titleSize : '24px';
}, function (_a) {
    var titleWeight = _a.titleWeight;
    return titleWeight !== null && titleWeight !== void 0 ? titleWeight : 800;
});
var Logo = function (_a) {
    var logoOption = _a.logoOption;
    var uriToMove = logoOption.uriToMove, logoImg = logoOption.logoImg, title = logoOption.title, styles = logoOption.styles;
    var logoMargin = styles.logoMargin, titleColor = styles.titleColor, titleSize = styles.titleSize, titleWeight = styles.titleWeight;
    return (react_1.default.createElement(Container, { href: uriToMove },
        react_1.default.createElement(LogoImgContainer, { logoMargin: logoMargin }, logoImg ? react_1.default.createElement("img", { src: logoImg }) : react_1.default.createElement(iconify_1.Icon, { icon: "simple-icons:devdotto", color: "#434521", fontSize: "80px" })),
        react_1.default.createElement(Title, { titleColor: titleColor, titleSize: titleSize, titleWeight: titleWeight }, title)));
};
exports.default = Logo;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Logo.js.map