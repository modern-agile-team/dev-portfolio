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
var Channels_1 = __importDefault(require("../Channels/Channels"));
var ContactForm = function (_a) {
    var contactOption = _a.contactOption;
    var title = contactOption.title, subTitle = contactOption.subTitle, buttonText = contactOption.buttonText, channels = contactOption.channels;
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(Channels_1.default, { channels: channels }),
        react_1.default.createElement(TitleContainer, null,
            react_1.default.createElement(Title, null, title),
            react_1.default.createElement("span", null, subTitle)),
        react_1.default.createElement(SendEmailButton, null, buttonText)));
};
exports.default = ContactForm;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  max-width: 40%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  max-width: 40%;\n"])));
var TitleContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var Title = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: 18px;\n"], ["\n  font-weight: bold;\n  font-size: 18px;\n"])));
var SendEmailButton = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 10px 10px;\n  margin: 10px 0px 0px 0px;\n  background-color: white;\n  border-radius: 4px;\n  border: 0.5px solid #00000033;\n  cursor: pointer;\n  &active {\n    background-color: red;\n  }\n"], ["\n  padding: 10px 10px;\n  margin: 10px 0px 0px 0px;\n  background-color: white;\n  border-radius: 4px;\n  border: 0.5px solid #00000033;\n  cursor: pointer;\n  &active {\n    background-color: red;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=ContactForm.js.map