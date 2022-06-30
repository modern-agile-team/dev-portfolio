"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fa_1 = require("../../dependencies/react-icons/fa");
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var hooks_1 = require("./hooks");
var Carousel = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, width = _a.width, _b = _a.transition, transition = _b === void 0 ? 1000 : _b, _c = _a.autoplaySpeed, autoplaySpeed = _c === void 0 ? 3000 : _c, _d = _a.slideToShow, slideToShow = _d === void 0 ? 1 : _d, _e = _a.isArrowShow, isArrowShow = _e === void 0 ? true : _e, _f = _a.isAutoplay, isAutoplay = _f === void 0 ? false : _f, _g = _a.arrowLocation, arrowLocation = _g === void 0 ? 'mid-side' : _g, _h = _a.prevArrowIcon, prevArrowIcon = _h === void 0 ? react_1.default.createElement(fa_1.FaArrowCircleLeft, null) : _h, _j = _a.nextArrowIcon, nextArrowIcon = _j === void 0 ? react_1.default.createElement(fa_1.FaArrowCircleRight, null) : _j;
    var _k = (0, react_1.useState)(0), showIndex = _k[0], setShowIndex = _k[1];
    var childrenLen = (0, react_1.useMemo)(function () { return react_1.default.Children.toArray(children).length; }, [children]);
    var lastChildIndex = (0, react_1.useMemo)(function () { return Math.floor((childrenLen - 1) / slideToShow); }, [childrenLen, slideToShow]);
    var showPrev = function () {
        if (showIndex === 0)
            return setShowIndex(function () { return lastChildIndex; });
        setShowIndex(function (prev) { return prev - 1; });
    };
    var showNext = function () {
        if (showIndex === lastChildIndex)
            return setShowIndex(function () { return 0; });
        setShowIndex(function (prev) { return prev + 1; });
    };
    var sizedPrevArrowIcon = (0, react_1.useMemo)(function () { return (0, react_1.cloneElement)(prevArrowIcon); }, [prevArrowIcon]);
    var sizedNextArrowIcon = (0, react_1.useMemo)(function () { return (0, react_1.cloneElement)(nextArrowIcon); }, [nextArrowIcon]);
    isAutoplay && (0, hooks_1.useInterval)(showNext, autoplaySpeed, [showIndex]);
    return (react_1.default.createElement(Wrapper, { arrowLocation: arrowLocation, width: width },
        isArrowShow && (react_1.default.createElement("div", { className: "icon-wrapper", id: "prev-button", onClick: showPrev }, sizedPrevArrowIcon)),
        react_1.default.createElement(Container, { ref: ref, len: childrenLen, transition: transition, showIndex: showIndex },
            react_1.default.createElement("div", { className: "carousel-wrapper" },
                react_1.default.createElement("div", { className: "carousel-container" }, react_1.default.Children.map(children, function (child) {
                    return (react_1.default.createElement(ChildrenWrapper, { len: childrenLen, slideToShow: slideToShow, key: child === null || child === void 0 ? void 0 : child.toString() }, child));
                })))),
        isArrowShow && (react_1.default.createElement("div", { className: "icon-wrapper", id: "next-button", onClick: showNext }, sizedNextArrowIcon))));
});
exports.default = react_1.default.memo(Carousel);
Carousel.defaultProps = {
    transition: 1000,
    autoplaySpeed: 3000,
    slideToShow: 1,
    isArrowShow: true,
    isAutoplay: false,
    arrowLocation: 'mid-side',
    prevArrowIcon: react_1.default.createElement(fa_1.FaArrowCircleLeft, null),
    nextArrowIcon: react_1.default.createElement(fa_1.FaArrowCircleRight, null),
};
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  position: relative;\n  margin: 0 auto;\n  ", "\n  .icon-wrapper {\n    font-size: 25px;\n  }\n"], ["\n  width: ", ";\n  position: relative;\n  margin: 0 auto;\n  ", "\n  .icon-wrapper {\n    font-size: 25px;\n  }\n"])), function (props) { return props.width || '100%'; }, function (_a) {
    var arrowLocation = _a.arrowLocation;
    var location = {
        top: undefined,
        bottom: undefined,
        side: undefined,
        translateY: undefined,
    };
    var _b = arrowLocation.split('-'), heigthLocation = _b[0], sideLocation = _b[1];
    if (sideLocation === 'side')
        location.side = '5%';
    else
        location.side = '50%';
    switch (heigthLocation) {
        case 'top':
            location.bottom = '100%';
            break;
        case 'bottom':
            location.top = '100%';
            break;
        case 'mid':
            location.top = '50%';
            location.translateY = '-50%';
            break;
    }
    var top = location.top, bottom = location.bottom, side = location.side, translateY = location.translateY;
    return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      .icon-wrapper {\n        position: absolute;\n        top: ", ";\n        bottom: ", ";\n        transform: translateY(", ");\n        z-index: 3;\n        cursor: pointer;\n      }\n      #next-button {\n        ", ": ", ";\n      }\n      #prev-button {\n        ", ": ", ";\n      }\n    "], ["\n      .icon-wrapper {\n        position: absolute;\n        top: ", ";\n        bottom: ", ";\n        transform: translateY(", ");\n        z-index: 3;\n        cursor: pointer;\n      }\n      #next-button {\n        ", ": ", ";\n      }\n      #prev-button {\n        ", ": ", ";\n      }\n    "])), top, bottom, translateY, sideLocation === 'side' ? 'right' : 'left', side, sideLocation === 'side' ? 'left' : 'right', side);
});
var Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  overflow: hidden;\n  .carousel-wrapper {\n    width: 100%;\n  }\n  .carousel-container {\n    display: flex;\n    position: relative;\n    transition: ", "s;\n    width: ", ";\n    transform: ", ";\n  }\n"], ["\n  overflow: hidden;\n  .carousel-wrapper {\n    width: 100%;\n  }\n  .carousel-container {\n    display: flex;\n    position: relative;\n    transition: ", "s;\n    width: ", ";\n    transform: ", ";\n  }\n"])), function (props) { return props.transition / 1000; }, function (props) { return "calc(".concat(props.len, " * 100%)"); }, function (props) { return "translateX(".concat((-props.showIndex * 100) / props.len, "%)"); });
var ChildrenWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  ", "\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  ", "\n"])), function (_a) {
    var len = _a.len, slideToShow = _a.slideToShow;
    if (slideToShow === 1) {
        return (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        width: 100%;\n      "], ["\n        width: 100%;\n      "])));
    }
    else {
        return (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width: calc(100% / ", ");\n      "], ["\n        width: calc(100% / ", ");\n      "])), len * slideToShow);
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Carousel.js.map