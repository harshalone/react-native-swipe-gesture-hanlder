import React from 'react';

interface SwipeGestureProps {
    gestureStyle?: any;
    children?: React.ReactNode;
    onSwipePerformed: (direction: string) => void;
}
declare const SwipeGesture: (props: SwipeGestureProps) => React.JSX.Element;

export { SwipeGesture };
