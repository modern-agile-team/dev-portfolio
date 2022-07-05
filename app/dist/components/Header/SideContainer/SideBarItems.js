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
var ItemContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  text-decoration: none;\n"], ["\n  color: ", ";\n  text-decoration: none;\n"])), function (_a) {
    var color = _a.color;
    return color !== null && color !== void 0 ? color : 'black';
});
var Item = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  margin: ", ";\n"], ["\n  cursor: pointer;\n  margin: ", ";\n"])), function (_a) {
    var margin = _a.margin;
    return margin !== null && margin !== void 0 ? margin : '10px 0px';
});
var SideBarItems = function (_a) {
    var sideBarItems = _a.sideBarItems, setIsClickedSideBarIcon = _a.setIsClickedSideBarIcon;
    return sideBarItems === null || sideBarItems === void 0 ? void 0 : sideBarItems.map(function (_a) {
        var title = _a.title, idx = _a.idx;
        return (_jsx(ItemContainer, __assign({ onClick: function () {
                var _a;
                setIsClickedSideBarIcon(false);
                (_a = document.getElementById(title)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
            } }, { children: _jsx(Item, { children: title }) }), idx));
    });
};
export default SideBarItems;
var templateObject_1, templateObject_2;
