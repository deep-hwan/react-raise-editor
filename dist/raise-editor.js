"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLimitEnterEditor = exports.useRaiseEditor = void 0;
var react_1 = require("react");
//
/// Editor > Adjust Editor Height
//
var useRaiseEditor = function (_a) {
    var state = _a.state, ref = _a.ref;
    (0, react_1.useEffect)(function () {
        if (state && state !== '' && ref && ref.current) {
            ref.current.style.height = 'auto';
            ref.current.style.height = ref.current.scrollHeight + 'px';
        }
        else if (ref && ref.current) {
            ref.current.style.height = 'auto';
        }
    }, [state, ref]);
};
exports.useRaiseEditor = useRaiseEditor;
//
/// Editor > Prevent indiscriminate paragraph spacing
//
var handleLimitEnterEditor = function (_a) {
    var event = _a.event, state = _a.state, handler = _a.handler;
    var inputValue = event.target.value;
    var formattedText = inputValue.replace(/(\r\n|\r|\n){2,}/g, '\n');
    handler(formattedText);
    if (state === '') {
        handler(event.target.value.trim());
    }
    else {
        handler(formattedText);
    }
};
exports.handleLimitEnterEditor = handleLimitEnterEditor;
