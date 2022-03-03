import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import gamais from '../../../constants/colors';
import globalStyles, {
  signInStyles,
  textStyles,
} from '../../../styles/globalStyles';

const NextGradButton = memo(props => {
  const {title, onPress} = props;
  return (
    <View>
      <TouchableOpacity
        style={globalStyles.P15Container}
        onPress={() => {
          onPress();
        }}>
        <LinearGradient // todo buat ButtonWithLoading Gradient
          colors={[gamais.soft, gamais.pd20]}
          style={signInStyles.button}>
          <Text style={{...textStyles.h3Center, color: gamais.white}}>
            {title}
          </Text>
          <MaterialIcons name="navigate-next" color="#ffffff" size={20} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
});

export default NextGradButton;
