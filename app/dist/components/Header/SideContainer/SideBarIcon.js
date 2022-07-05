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
import { FaBars } from 'react-icons/fa';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  margin: ", ";\n  border: 0px;\n"], ["\n  cursor: pointer;\n  margin: ", ";\n  border: 0px;\n"])), function (_a) {
    var margin = _a.margin;
    return margin !== null && margin !== void 0 ? margin : '0px 12px 0px 24px';
});
var SideBarIcon = function (_a) {
    var styles = _a.styles, onClick = _a.onClick;
    var size = styles.size, margin = styles.margin;
    return (_jsx(Container, __assign({ margin: margin, onClick: onClick }, { children: _jsx(FaBars, { fontSize: size }) })));
};
export default SideBarIcon;
var templateObject_1;
