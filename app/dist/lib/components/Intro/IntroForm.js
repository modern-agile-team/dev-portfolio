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
var IntroForm = function (_a) {
    var introDes = _a.introDes;
    var description = introDes.description;
    return (react_1.default.createElement(Wrap, null,
        react_1.default.createElement(IntroBox, null, description)));
};
exports.default = IntroForm;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var IntroBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 95vw;\n  min-height: 10em;\n  border-radius: 10px;\n  padding: 50px;\n  background-color: white;\n  display: grid;\n  align-items: center;\n  box-shadow: 0px 5px 8px 2px rgba(0, 0, 0, 0.1);\n"], ["\n  width: 95vw;\n  min-height: 10em;\n  border-radius: 10px;\n  padding: 50px;\n  background-color: white;\n  display: grid;\n  align-items: center;\n  box-shadow: 0px 5px 8px 2px rgba(0, 0, 0, 0.1);\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=IntroForm.js.map