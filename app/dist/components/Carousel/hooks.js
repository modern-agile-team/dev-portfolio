import { useEffect, useRef } from 'react';
var useInterval = function (callback, delay, deps) {
    var autoPlayRef = useRef(null);
    function resetTimeout() {
        if (autoPlayRef.current) {
            clearTimeout(autoPlayRef.current);
        }
    }
    useEffect(function () {
        resetTimeout();
        autoPlayRef.current = setTimeout(function () {
            callback();
        }, delay);
        return function () {
            resetTimeout();
        };
    }, deps);
};
export { useInterval };
