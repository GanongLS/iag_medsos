import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import gamais from '../../constants/colors';

const CustomCard = memo(props => {
  return (
    <View style={{...styles.cardStyle, ...props.containerStyle}} {...props}>
      {props.children}
    </View>
  );
});

const CustomCard15 = memo(props => {
  return (
    <View
      style={{...styles.cardStyle, padding: 15, ...props.containerStyle}}
      {...props}>
      {props.children}
    </View>
  );
});

export default CustomCard;
export {CustomCard15};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: gamais.white,
    padding: 10,
    borderRadius: 7,
    elevation: 2,
  },
});
