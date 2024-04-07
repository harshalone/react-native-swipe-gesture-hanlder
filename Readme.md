# react-native-swipe-gesture-handler

## install it 
```
yarn add 

``

## Import 
```
import { SwipeGesture } from "react-native-swipe-gesture-handler";

```

## Define a handler Function
```

    const onSwipePerformed = (action) => {
      
      switch(action){
        case 'left':{
          console.log('left Swipe performed'); 
          break;
        }
         case 'right':{ 
          console.log('right Swipe performed');
          break;
        }
         case 'up':{ 
          console.log('up Swipe performed'); 
          break;
        }
         case 'down':{ 
          console.log('down Swipe performed'); 
          break;
        }
         default : {
         console.log('Undeteceted action');
         }
      }
    }

```


## Add Swipte Gesture around your View or other component

```
    <SwipeGesture  
    onSwipePerformed={onSwipePerformed} 
    >
          <View>
          Your View Component
          </View>

    </SwipeGesture>
    
```

