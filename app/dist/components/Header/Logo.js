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
import { Icon } from '@iconify/react';
var Container = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n"])));
var LogoImgContainer = styled.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: ", ";\n"], ["\n  margin: ", ";\n"])), function (_a) {
    var logoMargin = _a.logoMargin;
    return logoMargin !== null && logoMargin !== void 0 ? logoMargin : '0px 16px 0px 16px';
});
var Title = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"])), function (_a) {
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
    return (_jsxs(Container, __assign({ href: uriToMove }, { children: [_jsx(LogoImgContainer, __assign({ logoMargin: logoMargin }, { children: logoImg ? _jsx("img", { src: logoImg }) : _jsx(Icon, { icon: "simple-icons:devdotto", color: "#434521", fontSize: "80px" }) })), _jsx(Title, __assign({ titleColor: titleColor, titleSize: titleSize, titleWeight: titleWeight }, { children: title }))] })));
};
export default Logo;
var templateObject_1, templateObject_2, templateObject_3;
