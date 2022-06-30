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
var iconify_1 = require("../../../dependencies/@iconify/react/dist/iconify");
var TechStackName = function (props) {
    var _a = props.name, name = _a === void 0 ? 'name of skill' : _a, _b = props.iconColor, iconColor = _b === void 0 ? 'black' : _b, _c = props.size, size = _c === void 0 ? '16px' : _c;
    return (react_1.default.createElement(NameContainer, null,
        react_1.default.createElement(iconify_1.Icon, { icon: "logos:".concat(name.toLowerCase()), color: iconColor, fontSize: size }),
        react_1.default.createElement(Name, null, name)));
};
exports.default = TechStackName;
TechStackName.defaultProps = {
    name: 'name of skill',
    iconColor: 'black',
    size: '16px',
};
var NameContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: ", ";\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: ", ";\n"])), function (_a) {
    var margin = _a.margin;
    return margin !== null && margin !== void 0 ? margin : '10px 3px';
});
var Name = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: 8px;\n  font-weight: bold;\n"], ["\n  margin-left: 8px;\n  font-weight: bold;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=TechStackName.js.map