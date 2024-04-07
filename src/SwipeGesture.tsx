import React, { useEffect, useRef } from 'react';
import { View, Animated, PanResponder, GestureResponderEvent, PanResponderGestureState } from 'react-native';

interface SwipeGestureProps {
  gestureStyle?: any;  
  children?: React.ReactNode;
  onSwipePerformed: (direction: string) => void;
}

const SwipeGesture = (props: SwipeGestureProps) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => true,
      onPanResponderRelease: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        const x = gestureState.dx;
        const y = gestureState.dy;
        if (Math.abs(x) > Math.abs(y)) {
          if (x >= 0) {
            props.onSwipePerformed('right');
          } else {
            props.onSwipePerformed('left');
          }
        } else {
          if (y >= 0) {
            props.onSwipePerformed('down');
          } else {
            props.onSwipePerformed('up');
          }
        }
      }
    })
  ).current;

  return (
    <Animated.View {...panResponder.panHandlers} style={props.gestureStyle}>
      {props.children} 
    </Animated.View>
  );
};

export default SwipeGesture;
