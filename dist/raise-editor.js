import { useEffect } from 'react';
//
/// Editor > Adjust Editor Height
//
export var useRaiseEditor = function (_a) {
    var state = _a.state, ref = _a.ref;
    useEffect(function () {
        if (state && state !== '' && ref && ref.current) {
            ref.current.style.height = 'auto';
            ref.current.style.height = ref.current.scrollHeight + 'px';
        }
        else if (ref && ref.current) {
            ref.current.style.height = 'auto';
        }
    }, [state, ref]);
};
//
/// Editor > Prevent indiscriminate paragraph spacing
//
export var handleLimitEnterEditor = function (_a) {
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
