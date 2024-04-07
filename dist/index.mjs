// src/SwipeGesture.tsx
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
import React, { useRef } from "react";
import { View, Animated, PanResponder } from "react-native";
var SwipeGesture = function(props) {
    var panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: function() {
            return true;
        },
        onPanResponderRelease: function(_, gestureState) {
            var x = gestureState.dx;
            var y = gestureState.dy;
            if (Math.abs(x) > Math.abs(y)) {
                if (x >= 0) {
                    props.onSwipePerformed("right");
                } else {
                    props.onSwipePerformed("left");
                }
            } else {
                if (y >= 0) {
                    props.onSwipePerformed("down");
                } else {
                    props.onSwipePerformed("up");
                }
            }
        }
    })).current;
    return /* @__PURE__ */ React.createElement(Animated.View, _object_spread_props(_object_spread({}, panResponder.panHandlers), {
        style: props.gestureStyle
    }), /* @__PURE__ */ React.createElement(View, null, props.children));
};
var SwipeGesture_default = SwipeGesture;
export { SwipeGesture_default as SwipeGesture };
//# sourceMappingURL=index.mjs.map