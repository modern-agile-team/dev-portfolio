"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TechStack_1 = __importDefault(require("./TechStack"));
var TechStackList = function (_a) {
    var techStackList = _a.techStackList, _b = _a.gap, gap = _b === void 0 ? 'normal' : _b;
    return (react_1.default.createElement("div", { id: "TechStacks" }, techStackList === null || techStackList === void 0 ? void 0 : techStackList.map(function (_a, idx) {
        var nameOption = _a.nameOption, progressBarOption = _a.progressBarOption;
        return (react_1.default.createElement(TechStack_1.default, { key: idx, nameOption: nameOption, progressBarOption: progressBarOption, gap: gap }));
    })));
};
exports.default = TechStackList;
TechStackList.defaultProps = {
    gap: 'normal',
};
//# sourceMappingURL=TechStackList.js.map