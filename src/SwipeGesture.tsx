import React, { useRef } from 'react';
import { View, Animated, PanResponder, ViewStyle } from 'react-native'; 

interface SwipeGestureProps {
  gestureStyle?: ViewStyle;
  onSwipePerformed: (direction: 'up' | 'down' | 'left' | 'right') => void;
}

const SwipeGesture: React.FC<SwipeGestureProps> = (props) => {

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (_: any, gestureState: any) => {
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
      <View>{props.children}</View>
    </Animated.View>
  );
};

export default SwipeGesture;
