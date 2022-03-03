import React, {useContext, useRef, memo, forwardRef} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {normalize} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import colors from '../../Configs/colors';

//Components Modules
import {dropDonwnContext} from './DropDownProvider';
import gamais from '../../Configs/colors';

const DropDownInputView = memo(
  forwardRef((props, ref) => {
    const {
      inputTitle,
      optionalPH,
      iconName,
      displayValue,
      onShow,
      isValidInput,
    } = props;
    const dropDownValue = useContext(dropDonwnContext);
    const {onSetPosition} = dropDownValue;

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
          ref={ref}
          collapsable={false}
          onLayout={({nativeEvent}) => {
            // console.log('setting position');
            if (ref) {
              ref.current.measure((x, y, width, height, pageX, pageY) => {
                // console.log(x, y, width, height, pageX, pageY);
                onSetPosition(width, height, pageX, pageY);
              });
            }
          }}
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
              ref={ref}
              placeholder={`Pilih ${inputTitle} ${optionalPH}`}
              editable={false}
              // value={name}
              value={displayValue}
              placeholderTextColor={colors.gray2}
            />
            <MaterialCommunityIcons name="chevron-down" size={normalize(27)} />
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
  }),
);
DropDownInputView.propTypes = {props: PropTypes.object};
DropDownInputView.defaultProps = {
  onJump: null,
  inputTitle: 'Nomor Pelanggan',
};
export default DropDownInputView;
