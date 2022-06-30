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
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 10px 0px;\n"], ["\n  margin: 10px 0px;\n"])));
var AboutMeEachContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 10px 0px 10px 10px;\n"], ["\n  margin: 10px 0px 10px 10px;\n"])));
var AboutMeTitle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: bold;\n  color: #00000066;\n"], ["\n  font-weight: bold;\n  color: #00000066;\n"])));
var AboutMe = function (_a) {
    var aboutMeInfos = _a.aboutMeInfos;
    return (react_1.default.createElement(Container, null, aboutMeInfos.map(function (_a, idx) {
        var title = _a.title, description = _a.description;
        return (react_1.default.createElement(AboutMeEachContainer, { key: idx },
            react_1.default.createElement(AboutMeTitle, null, title),
            react_1.default.createElement("div", null, description)));
    })));
};
exports.default = AboutMe;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=AboutMe.js.map