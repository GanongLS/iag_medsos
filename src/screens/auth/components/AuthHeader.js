import React, {memo} from 'react';
import {Image, Text, View} from 'react-native';
import gamais from '../../../constants/colors';
import {height} from '../../../constants/constants';

import globalStyles, {textStyles} from '../../../styles/globalStyles';
import authStyles from '../styles/authStyles';

const AuthHeader = memo(props => {
  const {headerTitle} = props;
  return (
    <View
      style={{
        ...authStyles.logoContainer,
        ...globalStyles.rowSBContainer,
      }}>
      <Image
        source={require('../../../assets/images/iag-png-ink.png')}
        style={{
          ...authStyles.logoImageStyle,
        }}
      />
      <View
        style={{
          flexGrow: 1,
          alignItems: 'center',
          marginTop: -height * 0.04,
        }}>
        <Text
          style={{
            ...textStyles.h2Left,
            color: gamais.white,
          }}>
          {headerTitle}
        </Text>
      </View>
    </View>
  );
});

export default AuthHeader;
