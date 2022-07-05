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
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import React, { cloneElement, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { useInterval } from './hooks';
var Carousel = React.forwardRef(function (_a, ref) {
    var children = _a.children, width = _a.width, _b = _a.transition, transition = _b === void 0 ? 1000 : _b, _c = _a.autoplaySpeed, autoplaySpeed = _c === void 0 ? 3000 : _c, _d = _a.slideToShow, slideToShow = _d === void 0 ? 1 : _d, _e = _a.isArrowShow, isArrowShow = _e === void 0 ? true : _e, _f = _a.isAutoplay, isAutoplay = _f === void 0 ? false : _f, _g = _a.arrowLocation, arrowLocation = _g === void 0 ? 'mid-side' : _g, _h = _a.prevArrowIcon, prevArrowIcon = _h === void 0 ? _jsx(FaArrowCircleLeft, {}) : _h, _j = _a.nextArrowIcon, nextArrowIcon = _j === void 0 ? _jsx(FaArrowCircleRight, {}) : _j;
    var _k = useState(0), showIndex = _k[0], setShowIndex = _k[1];
    var childrenLen = useMemo(function () { return React.Children.toArray(children).length; }, [children]);
    var lastChildIndex = useMemo(function () { return Math.floor((childrenLen - 1) / slideToShow); }, [childrenLen, slideToShow]);
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
    /* These const variables are ArrowIcons received to props */
    var sizedPrevArrowIcon = useMemo(function () { return cloneElement(prevArrowIcon); }, [prevArrowIcon]);
    var sizedNextArrowIcon = useMemo(function () { return cloneElement(nextArrowIcon); }, [nextArrowIcon]);
    /* useInterval is setTimeout custom hook */
    isAutoplay && useInterval(showNext, autoplaySpeed, [showIndex]);
    return (_jsxs(Wrapper, __assign({ arrowLocation: arrowLocation, width: width }, { children: [isArrowShow && (_jsx("div", __assign({ className: "icon-wrapper", id: "prev-button", onClick: showPrev }, { children: sizedPrevArrowIcon }))), _jsx(Container, __assign({ ref: ref, len: childrenLen, transition: transition, showIndex: showIndex }, { children: _jsx("div", __assign({ className: "carousel-wrapper" }, { children: _jsx("div", __assign({ className: "carousel-container" }, { children: React.Children.map(children, function (child) {
                            return (_jsx(ChildrenWrapper, __assign({ len: childrenLen, slideToShow: slideToShow }, { children: child }), child === null || child === void 0 ? void 0 : child.toString()));
                        }) })) })) })), isArrowShow && (_jsx("div", __assign({ className: "icon-wrapper", id: "next-button", onClick: showNext }, { children: sizedNextArrowIcon })))] })));
});
export default React.memo(Carousel);
Carousel.defaultProps = {
    transition: 1000,
    autoplaySpeed: 3000,
    slideToShow: 1,
    isArrowShow: true,
    isAutoplay: false,
    arrowLocation: 'mid-side',
    prevArrowIcon: _jsx(FaArrowCircleLeft, {}),
    nextArrowIcon: _jsx(FaArrowCircleRight, {}),
};
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  position: relative;\n  margin: 0 auto;\n  ", "\n  .icon-wrapper {\n    font-size: 25px;\n  }\n"], ["\n  width: ", ";\n  position: relative;\n  margin: 0 auto;\n  ", "\n  .icon-wrapper {\n    font-size: 25px;\n  }\n"])), function (props) { return props.width || '100%'; }, function (_a) {
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
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      .icon-wrapper {\n        position: absolute;\n        top: ", ";\n        bottom: ", ";\n        transform: translateY(", ");\n        z-index: 3;\n        cursor: pointer;\n      }\n      #next-button {\n        ", ": ", ";\n      }\n      #prev-button {\n        ", ": ", ";\n      }\n    "], ["\n      .icon-wrapper {\n        position: absolute;\n        top: ", ";\n        bottom: ", ";\n        transform: translateY(", ");\n        z-index: 3;\n        cursor: pointer;\n      }\n      #next-button {\n        ", ": ", ";\n      }\n      #prev-button {\n        ", ": ", ";\n      }\n    "])), top, bottom, translateY, sideLocation === 'side' ? 'right' : 'left', side, sideLocation === 'side' ? 'left' : 'right', side);
});
var Container = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  overflow: hidden;\n  .carousel-wrapper {\n    width: 100%;\n  }\n  .carousel-container {\n    display: flex;\n    position: relative;\n    transition: ", "s;\n    width: ", ";\n    transform: ", ";\n  }\n"], ["\n  overflow: hidden;\n  .carousel-wrapper {\n    width: 100%;\n  }\n  .carousel-container {\n    display: flex;\n    position: relative;\n    transition: ", "s;\n    width: ", ";\n    transform: ", ";\n  }\n"])), function (props) { return props.transition / 1000; }, function (props) { return "calc(".concat(props.len, " * 100%)"); }, function (props) { return "translateX(".concat((-props.showIndex * 100) / props.len, "%)"); });
var ChildrenWrapper = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  ", "\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  ", "\n"])), function (_a) {
    var len = _a.len, slideToShow = _a.slideToShow;
    if (slideToShow === 1) {
        return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        width: 100%;\n      "], ["\n        width: 100%;\n      "])));
    }
    else {
        return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width: calc(100% / ", ");\n      "], ["\n        width: calc(100% / ", ");\n      "])), len * slideToShow);
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
