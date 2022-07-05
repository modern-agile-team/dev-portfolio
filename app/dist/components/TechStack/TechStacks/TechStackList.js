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
import { jsx as _jsx } from "react/jsx-runtime";
import TechStack from './TechStack';
var TechStackList = function (_a) {
    var techStackList = _a.techStackList, _b = _a.gap, gap = _b === void 0 ? 'normal' : _b;
    return (_jsx("div", __assign({ id: "TechStacks" }, { children: techStackList === null || techStackList === void 0 ? void 0 : techStackList.map(function (_a, idx) {
            var nameOption = _a.nameOption, progressBarOption = _a.progressBarOption;
            return (_jsx(TechStack, { nameOption: nameOption, progressBarOption: progressBarOption, gap: gap }, idx));
        }) })));
};
export default TechStackList;
TechStackList.defaultProps = {
    gap: 'normal',
};
