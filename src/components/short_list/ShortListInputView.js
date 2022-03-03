import React, {memo} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {normalize} from 'react-native-elements';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import colors from '../../Configs/colors';
import gamais from '../../Configs/colors';

const ListNSearchInputView = memo((props) => {
  const {
    inputTitle,
    displayValue,
    onShow,
    isValidInput,
    iconName,
    optionalPH,
  } = props;
  return (
    <View>
      <Text
        style={{
          ...textStyles.formLabel,
          marginBottom: 5,
          color: colors.dark,
        }}>
        {inputTitle}
      </Text>
      <TouchableOpacity
        onPress={() => {
          onShow();
        }}>
        <View style={globalStyles.rowSBULContainer}>
          <Icon
            name={iconName}
            color={gamais.dark}
            size={20}
            style={{flex: 0.1}}
          />
          <TextInput
            style={{
              fontFamily: 'SanomatSans',
              color: colors.dark,
              flex: 1,
            }}
            placeholder={`Pilih ${inputTitle} ${optionalPH}`}
            editable={false}
            value={displayValue}
            placeholderTextColor={colors.gray2}
          />
          <Icons name="chevron-down" size={normalize(27)} />
        </View>
      </TouchableOpacity>
      {isValidInput ? null : (
        <View>
          <Text
            style={textStyles.errorMsg}>{`${inputTitle} harus dipilih`}</Text>
        </View>
      )}
    </View>
  );
});
ListNSearchInputView.defaultProps = {
  onJump: null,
  inputTitle: 'Nomor Pelanggan',
};
export default ListNSearchInputView;
