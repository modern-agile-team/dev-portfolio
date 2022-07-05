var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { Icon } from '@iconify/react';
var TechStackName = function (props) {
    var _a = props.name, name = _a === void 0 ? 'name of skill' : _a, _b = props.iconColor, iconColor = _b === void 0 ? 'black' : _b, _c = props.size, size = _c === void 0 ? '16px' : _c;
    return (_jsxs(NameContainer, { children: [_jsx(Icon, { icon: "logos:".concat(name.toLowerCase()), color: iconColor, fontSize: size }), _jsx(Name, { children: name })] }));
};
export default TechStackName;
TechStackName.defaultProps = {
    name: 'name of skill',
    iconColor: 'black',
    size: '16px',
};
var NameContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: ", ";\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: ", ";\n"])), function (_a) {
    var margin = _a.margin;
    return margin !== null && margin !== void 0 ? margin : '10px 3px';
});
var Name = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: 8px;\n  font-weight: bold;\n"], ["\n  margin-left: 8px;\n  font-weight: bold;\n"])));
var templateObject_1, templateObject_2;
