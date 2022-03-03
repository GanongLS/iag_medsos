import React, {memo} from 'react';
import {View, Image, Text, Animated} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import globalStyles from '../Styles/globalStyles';
import colors from '../Constants/colors';
import TouchableItem from '../Components/TouchableItem';

const AnimatedHeader = memo((props, otherProps) => {
  return (
    <Animated.View
      style={{...globalStyles.headerContainer, ...props.otherStyle}}
      {...otherProps}>
      <View
        style={{
          width: '20%',
          alignContent: 'center',
          justifyContent: 'center',
          height: '100%',
          ...props.headerRightStyle,
        }}>
        {props.headerLeft}
      </View>
      <View style={{width: '60%'}}>{props.headerCenter}</View>
      <View
        style={{
          width: '20%',
          alignContent: 'center',
          justifyContent: 'center',
          height: '100%',
          ...props.headerRightStyle,
        }}>
        {props.headerRight}
      </View>
    </Animated.View>
  );
});


export default AnimatedHeader;
