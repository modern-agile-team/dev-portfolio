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
var fa_1 = require("../../../dependencies/react-icons/fa");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  margin: ", ";\n  border: 0px;\n"], ["\n  cursor: pointer;\n  margin: ", ";\n  border: 0px;\n"])), function (_a) {
    var margin = _a.margin;
    return margin !== null && margin !== void 0 ? margin : '0px 12px 0px 24px';
});
var SideBarIcon = function (_a) {
    var styles = _a.styles, onClick = _a.onClick;
    var size = styles.size, margin = styles.margin;
    return (react_1.default.createElement(Container, { margin: margin, onClick: onClick },
        react_1.default.createElement(fa_1.FaBars, { fontSize: size })));
};
exports.default = SideBarIcon;
var templateObject_1;
//# sourceMappingURL=SideBarIcon.js.map