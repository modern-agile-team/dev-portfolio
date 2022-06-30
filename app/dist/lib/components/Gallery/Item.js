"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var Item = function (_a) {
    var moveURL = _a.moveURL, title = _a.title, description = _a.description, imgURL = _a.imgURL;
    var _b = (0, react_1.useState)(false), isHover = _b[0], setIsHover = _b[1];
    return (React.createElement(StyledItem, { className: "gallery-item", isHover: isHover, onMouseEnter: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); } },
        React.createElement("a", { href: moveURL },
            React.createElement("img", { src: imgURL, alt: title }),
            isHover && (React.createElement("div", { className: "hover" },
                React.createElement("section", { className: "inner-hover" },
                    React.createElement("h3", null, title),
                    React.createElement("p", null, description)))))));
};
exports.default = Item;
Item.defaultProps = {
    moveURL: '',
    title: 'This is title',
    description: 'description',
    imgURL: 'https://catnip-echium-964.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba8bdb9c-c600-453f-bdb7-9c04419b026c%2Fdefault.png?table=block&id=440c81c7-fdfa-4688-87bd-51215d4ef7d3&spaceId=0b241d7f-6520-4240-ac94-27957e3f3aa5&width=2000&userId=&cache=v2',
};
var StyledItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  list-style: none;\n  position: relative;\n  top: 0px;\n  transition: 0.3s;\n  box-shadow: 0px 1px 10px 0px rgba(63, 63, 63, 0.2);\n  cursor: pointer;\n  img {\n    position: relative;\n    border-radius: 4px;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    flex-grow: 1;\n  }\n  .hover {\n    position: absolute;\n    box-sizing: border-box;\n    border-radius: 4px;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 16px;\n  }\n  .inner-hover {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border: 1px solid #fff;\n  }\n  &:hover {\n    top: 10px;\n  }\n  h1,\n  p {\n    text-align: center;\n    width: 80%;\n    overflow-wrap: break-word;\n  }\n"], ["\n  list-style: none;\n  position: relative;\n  top: 0px;\n  transition: 0.3s;\n  box-shadow: 0px 1px 10px 0px rgba(63, 63, 63, 0.2);\n  cursor: pointer;\n  img {\n    position: relative;\n    border-radius: 4px;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    flex-grow: 1;\n  }\n  .hover {\n    position: absolute;\n    box-sizing: border-box;\n    border-radius: 4px;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 16px;\n  }\n  .inner-hover {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border: 1px solid #fff;\n  }\n  &:hover {\n    top: 10px;\n  }\n  h1,\n  p {\n    text-align: center;\n    width: 80%;\n    overflow-wrap: break-word;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Item.js.map