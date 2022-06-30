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
var ItemContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  text-decoration: none;\n"], ["\n  color: ", ";\n  text-decoration: none;\n"])), function (_a) {
    var color = _a.color;
    return color !== null && color !== void 0 ? color : 'black';
});
var Item = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  margin: ", ";\n"], ["\n  cursor: pointer;\n  margin: ", ";\n"])), function (_a) {
    var margin = _a.margin;
    return margin !== null && margin !== void 0 ? margin : '10px 0px';
});
var SideBarItems = function (_a) {
    var sideBarItems = _a.sideBarItems, setIsClickedSideBarIcon = _a.setIsClickedSideBarIcon;
    return sideBarItems === null || sideBarItems === void 0 ? void 0 : sideBarItems.map(function (_a) {
        var title = _a.title, idx = _a.idx;
        return (react_1.default.createElement(ItemContainer, { key: idx, onClick: function () {
                var _a;
                setIsClickedSideBarIcon(false);
                (_a = document.getElementById(title)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
            } },
            react_1.default.createElement(Item, null, title)));
    });
};
exports.default = SideBarItems;
var templateObject_1, templateObject_2;
//# sourceMappingURL=SideBarItems.js.map