"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
var react_1 = require("react");
var useInterval = function (callback, delay, deps) {
    var autoPlayRef = (0, react_1.useRef)(null);
    function resetTimeout() {
        if (autoPlayRef.current) {
            clearTimeout(autoPlayRef.current);
        }
    }
    (0, react_1.useEffect)(function () {
        resetTimeout();
        autoPlayRef.current = setTimeout(function () {
            callback();
        }, delay);
        return function () {
            resetTimeout();
        };
    }, deps);
};
exports.useInterval = useInterval;
//# sourceMappingURL=hooks.js.map