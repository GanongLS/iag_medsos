import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {height} from '../../constants/constants';
import colors from '../../constants/colors';

const GradView = memo(props => {
  return (
    <LinearGradient
      colors={['#11A6C0', '#49519A']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1.0}}
      style={{
        ...styles.container,
        ...props.containerStyle,
        height: props.height ? props.height : height * 0.33333,
      }}>
      {props.children}
    </LinearGradient>
  );
});

const BlackGradient = memo(props => {
  const {height, style, ...attr} = props;
  return (
    <LinearGradient
      {...attr}
      colors={['transparent', '#000000']}
      start={{x: 0.5, y: 0.7}}
      end={{x: 0.5, y: 0.9}}
      style={{
        ...gradientStyles.container,

        height: height ? height : '100%',
        ...style,
      }}>
      {props.children}
    </LinearGradient>
  );
});

const GreyGradient = memo(props => {
  const {height, style, ...attr} = props;
  return (
    <LinearGradient
      {...attr}
      colors={['transparent', colors.gray20]}
      start={{x: 0.5, y: 0.6}}
      end={{x: 0.5, y: 0.98}}
      style={{
        ...gradientStyles.container,
        height: height ? height : '100%',
        ...style,
      }}>
      {props.children}
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    zIndex: 0,
  },
});

const gradientStyles = StyleSheet.create({
  container: {
    width: '100%',
    zIndex: 0,
    position: 'absolute',
    bottom: 0,
  },
});

export default GradView;

export {BlackGradient, GreyGradient};
