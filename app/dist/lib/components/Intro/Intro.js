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
var index_1 = require("./index");
var Intro = function (_a) {
    var _b = _a.introOption, introOption = _b === void 0 ? IntroOptionDefault : _b, textAlign = _a.textAlign, background = _a.background;
    return (react_1.default.createElement(Wrap, { textAlign: textAlign, background: background },
        react_1.default.createElement(index_1.IntroTitle, { introOption: introOption }),
        react_1.default.createElement(index_1.IntroForm, { introDes: introOption })));
};
exports.default = Intro;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  padding-top: 20px;\n  white-space: pre-wrap; //\uC904\uBC14\uAFC8 \uC778\uC2DD\n  text-align: ", ";\n  background-color: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  padding-top: 20px;\n  white-space: pre-wrap; //\uC904\uBC14\uAFC8 \uC778\uC2DD\n  text-align: ", ";\n  background-color: ", ";\n"])), function (_a) {
    var textAlign = _a.textAlign;
    return textAlign !== null && textAlign !== void 0 ? textAlign : 'left';
}, function (_a) {
    var background = _a.background;
    return background !== null && background !== void 0 ? background : 'whitesmoke';
});
var IntroOptionDefault = {
    title: 'Intro',
    shortIntro: 'shortIntro that will captivate people',
    description: 'This props name is description.\nPlease write down your brief introduction here.\nIf you want to change the line, type backslash-n between the letters.\nAlso you want to move the letters to the center, change textAlign to center.\n\nSpread your dreams!',
};
var templateObject_1;
//# sourceMappingURL=Intro.js.map