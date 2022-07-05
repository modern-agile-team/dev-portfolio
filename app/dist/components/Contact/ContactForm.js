var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import Channels from '../Channels/Channels';
var ContactForm = function (_a) {
    var contactOption = _a.contactOption;
    var title = contactOption.title, subTitle = contactOption.subTitle, buttonText = contactOption.buttonText, channels = contactOption.channels;
    return (_jsxs(Container, { children: [_jsx(Channels, { channels: channels }), _jsxs(TitleContainer, { children: [_jsx(Title, { children: title }), _jsx("span", { children: subTitle })] }), _jsx(SendEmailButton, { children: buttonText })] }));
};
export default ContactForm;
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  max-width: 40%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  max-width: 40%;\n"])));
var TitleContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var Title = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: 18px;\n"], ["\n  font-weight: bold;\n  font-size: 18px;\n"])));
var SendEmailButton = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 10px 10px;\n  margin: 10px 0px 0px 0px;\n  background-color: white;\n  border-radius: 4px;\n  border: 0.5px solid #00000033;\n  cursor: pointer;\n  &active {\n    background-color: red;\n  }\n"], ["\n  padding: 10px 10px;\n  margin: 10px 0px 0px 0px;\n  background-color: white;\n  border-radius: 4px;\n  border: 0.5px solid #00000033;\n  cursor: pointer;\n  &active {\n    background-color: red;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
