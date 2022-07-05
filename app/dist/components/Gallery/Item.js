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
import { useState } from 'react';
import styled from 'styled-components';
var Item = function (_a) {
    var moveURL = _a.moveURL, title = _a.title, description = _a.description, imgURL = _a.imgURL;
    var _b = useState(false), isHover = _b[0], setIsHover = _b[1];
    return (_jsx(StyledItem, __assign({ className: "gallery-item", isHover: isHover, onMouseEnter: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); } }, { children: _jsxs("a", __assign({ href: moveURL }, { children: [_jsx("img", { src: imgURL, alt: title }), isHover && (_jsx("div", __assign({ className: "hover" }, { children: _jsxs("section", __assign({ className: "inner-hover" }, { children: [_jsx("h3", { children: title }), _jsx("p", { children: description })] })) })))] })) })));
};
export default Item;
Item.defaultProps = {
    moveURL: '',
    title: 'This is title',
    description: 'description',
    imgURL: 'https://catnip-echium-964.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba8bdb9c-c600-453f-bdb7-9c04419b026c%2Fdefault.png?table=block&id=440c81c7-fdfa-4688-87bd-51215d4ef7d3&spaceId=0b241d7f-6520-4240-ac94-27957e3f3aa5&width=2000&userId=&cache=v2',
};
var StyledItem = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  list-style: none;\n  position: relative;\n  top: 0px;\n  transition: 0.3s;\n  box-shadow: 0px 1px 10px 0px rgba(63, 63, 63, 0.2);\n  cursor: pointer;\n  img {\n    position: relative;\n    border-radius: 4px;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    flex-grow: 1;\n  }\n  .hover {\n    position: absolute;\n    box-sizing: border-box;\n    border-radius: 4px;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 16px;\n  }\n  .inner-hover {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border: 1px solid #fff;\n  }\n  &:hover {\n    top: 10px;\n  }\n  h1,\n  p {\n    text-align: center;\n    width: 80%;\n    overflow-wrap: break-word;\n  }\n"], ["\n  list-style: none;\n  position: relative;\n  top: 0px;\n  transition: 0.3s;\n  box-shadow: 0px 1px 10px 0px rgba(63, 63, 63, 0.2);\n  cursor: pointer;\n  img {\n    position: relative;\n    border-radius: 4px;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    flex-grow: 1;\n  }\n  .hover {\n    position: absolute;\n    box-sizing: border-box;\n    border-radius: 4px;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 16px;\n  }\n  .inner-hover {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border: 1px solid #fff;\n  }\n  &:hover {\n    top: 10px;\n  }\n  h1,\n  p {\n    text-align: center;\n    width: 80%;\n    overflow-wrap: break-word;\n  }\n"])));
var templateObject_1;
