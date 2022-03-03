import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {height} from '../../constants/constants';
import gamais from '../../constants/colors';

const IAGGradient = memo(props => {
  return (
    <LinearGradient
      colors={[gamais.soft, gamais.pd20]} // notesoft to dark
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1.0}}
      style={{
        ...style.container,
        ...props.containerStyle,
        height: props.height ? props.height : height * 0.33333,
      }}>
      {props.children}
    </LinearGradient>
  );
});

const style = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    zIndex: 0,
  },
});

export default IAGGradient;
