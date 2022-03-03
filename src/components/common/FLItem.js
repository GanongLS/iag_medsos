import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import {height, width} from '../../Configs/constants';
import colors from '../../Configs/colors';

const FLItem = memo(({name, func}) => {
  return (
    <View
      style={{
        ...globalStyles.container,
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}>
      <TouchableOpacity
        onPress={() => {
          func();
        }}>
        <View
          style={{
            ...globalStyles.rowSBULContainer,
            width: '100%',
            height: height * 0.08,
            paddingHorizontal: 10,
            elevation: 1,
          }}>
          <Text style={{...textStyles.h4Left, textAlignVertical: 'center'}}>
            {name}
          </Text>
          <Icon
            name="chevron-forward-circle"
            color={colors.secondary}
            size={26}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
});

export default FLItem;
