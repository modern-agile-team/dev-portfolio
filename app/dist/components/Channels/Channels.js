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
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { Icon } from '@iconify/react';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));
var Channel = styled.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: ", ";\n"], ["\n  margin: ", ";\n"])), function (_a) {
    var margin = _a.margin;
    return margin !== null && margin !== void 0 ? margin : '0px 6px 0px 6px';
});
var Channels = function (_a) {
    var channels = _a.channels;
    return (_jsx(Container, { children: channels === null || channels === void 0 ? void 0 : channels.map(function (_a, idx) {
            var uriToMove = _a.uriToMove, name = _a.name, color = _a.color, size = _a.size, margin = _a.margin;
            return (_jsx(Channel, __assign({ href: uriToMove, margin: margin }, { children: _jsx(Icon, { icon: "simple-icons:".concat(name), color: color, fontSize: size }) }), idx));
        }) }));
};
export default Channels;
var templateObject_1, templateObject_2;
