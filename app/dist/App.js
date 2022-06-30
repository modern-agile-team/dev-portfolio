"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fa_1 = require("./lib/dependencies/react-icons/fa");
var fa_2 = require("./lib/dependencies/react-icons/fa");
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var index_1 = require("./lib/index");
function App() {
    var techStacksDefault = [
        {
            nameOption: { name: 'Javascript', size: '24px', iconColor: '#E2D784' },
            progressBarOption: { rate: '45%' },
        },
        {
            nameOption: { name: 'HTML-5', size: '24px', iconColor: '#E34F26' },
            progressBarOption: { rate: '30%' },
        },
        {
            nameOption: { name: 'Nodejs', size: '24px', iconColor: '#339933' },
            progressBarOption: {
                rate: '85%',
                colorTo: '#339933',
                colorFrom: 'whitesmoke',
            },
        },
    ];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(index_1.Header, null),
        react_1.default.createElement(index_1.TechStackList, { techStackList: techStacksDefault }),
        react_1.default.createElement(index_1.TechStackInput, null),
        react_1.default.createElement(index_1.Intro, null),
        react_1.default.createElement(index_1.Experience, null),
        react_1.default.createElement(index_1.Gallery, null,
            react_1.default.createElement(index_1.Item, null),
            react_1.default.createElement(index_1.Item, null),
            react_1.default.createElement(index_1.Item, null),
            react_1.default.createElement(index_1.Item, null),
            react_1.default.createElement(index_1.Item, null),
            react_1.default.createElement(index_1.Item, null),
            react_1.default.createElement(index_1.Item, null),
            react_1.default.createElement(index_1.Item, null),
            react_1.default.createElement(index_1.Item, null)),
        react_1.default.createElement(index_1.Masonry, null,
            react_1.default.createElement(index_1.Image, { src: "https://picsum.photos/600/600/?random" }),
            react_1.default.createElement(index_1.Image, { src: "https://picsum.photos/600/1100/?random" }),
            react_1.default.createElement(index_1.Image, { src: "https://picsum.photos/300/400/?random" }),
            react_1.default.createElement(index_1.Image, { src: "https://picsum.photos/600/400/?random" }),
            react_1.default.createElement(index_1.Image, { src: "https://picsum.photos/600/900/?random" }),
            react_1.default.createElement(index_1.Image, { src: "https://picsum.photos/600/300/?random" }),
            react_1.default.createElement(index_1.Image, { src: "https://picsum.photos/400/100/?random" }),
            react_1.default.createElement(index_1.Image, { src: "https://picsum.photos/600/600/?random" }),
            react_1.default.createElement(index_1.Image, { src: "https://picsum.photos/600/800/?random" }),
            react_1.default.createElement(index_1.Image, { src: "https://picsum.photos/600/1000/?random" }),
            react_1.default.createElement(index_1.Image, { src: "https://picsum.photos/600/500/?random" }),
            react_1.default.createElement(index_1.Image, { src: "https://picsum.photos/500/600/?random" })),
        react_1.default.createElement(index_1.Carousel, { transition: 1000, width: "500px", arrowLocation: "mid-side", prevArrowIcon: react_1.default.createElement(fa_2.FaStickerMule, { size: 50 }), nextArrowIcon: react_1.default.createElement(fa_1.FaSuse, { size: 50 }) },
            react_1.default.createElement("div", { style: { width: '200px', padding: '15px' } },
                react_1.default.createElement(index_1.Item, { title: "1" })),
            react_1.default.createElement(index_1.Item, { title: "2" }),
            react_1.default.createElement(index_1.Item, { title: "3" })),
        react_1.default.createElement(CardWrap, null,
            react_1.default.createElement(index_1.Card, { width: "20em", height: "20em", hover: "down" }, "This is Card component"),
            react_1.default.createElement(index_1.Card, { width: "20em", height: "20em", shape: "round-square", hover: "zoom" }, "You can use this components anyware"),
            react_1.default.createElement(index_1.Card, { width: "20em", height: "20em", shape: "round", hover: "up" }, "See official documentation for details")),
        react_1.default.createElement(index_1.Contact, null)));
}
exports.default = App;
var CardWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  padding: 3em;\n  justify-content: space-around;\n"], ["\n  display: flex;\n  padding: 3em;\n  justify-content: space-around;\n"])));
var templateObject_1;
//# sourceMappingURL=App.js.map