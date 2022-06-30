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
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));
var Channel = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: ", ";\n"], ["\n  margin: ", ";\n"])), function (_a) {
    var margin = _a.margin;
    return margin !== null && margin !== void 0 ? margin : '0px 6px 0px 6px';
});
var Channels = function (_a) {
    var channels = _a.channels;
    return (react_1.default.createElement(Container, null, channels === null || channels === void 0 ? void 0 : channels.map(function (_a, idx) {
        var uriToMove = _a.uriToMove, name = _a.name, color = _a.color, size = _a.size, margin = _a.margin;
        return (react_1.default.createElement(Channel, { key: idx, href: uriToMove, margin: margin },
            react_1.default.createElement(iconify_1.Icon, { icon: "simple-icons:".concat(name), color: color, fontSize: size })));
    })));
};
exports.default = Channels;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Channels.js.map