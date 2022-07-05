var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
import Channels from '../../Channels/Channels';
import SideBarIcon from './SideBarIcon';
import SideBar from './SideBar';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));
var SideContainer = function (_a) {
    var channels = _a.channels, sideBarOption = _a.sideBarOption;
    var mainTitle = sideBarOption.mainTitle, items = sideBarOption.items, styles = sideBarOption.styles;
    var _b = useState(false), isClickedSideBarIcon = _b[0], setIsClickedSideBarIcon = _b[1];
    var _c = useState(items), sideBarItems = _c[0], setSideBarItems = _c[1];
    var onClickSideBarIconHandler = function () {
        var _a;
        var $tags = (_a = document.querySelector('#root')) === null || _a === void 0 ? void 0 : _a.childNodes;
        setSideBarItems(Array.from($tags)
            .filter(function ($tag) { return $tag.id !== 'Header'; })
            .map(function ($tag) {
            return { title: $tag.id };
        }));
        setIsClickedSideBarIcon(true);
    };
    return (_jsxs(Container, { children: [_jsx(Channels, { channels: channels }), _jsx(SideBarIcon, { styles: styles, onClick: onClickSideBarIconHandler }), isClickedSideBarIcon && (_jsx(SideBar, { mainTitle: mainTitle, sideBarItems: sideBarItems, isClickedSideBarIcon: isClickedSideBarIcon, setIsClickedSideBarIcon: setIsClickedSideBarIcon }))] }));
};
export default SideContainer;
var templateObject_1;
