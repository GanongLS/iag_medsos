import React, {memo, useContext, forwardRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import CommonInput from './CommonInput';
import {authInputContext} from '../../../Provider/AuthInputProvider';

const InputProfileName = memo(
  forwardRef((props, ref) => {
    const {onJump} = props;
    const {authInputState, onProfileNameChange, onProfileNameValidation} = useContext(
      authInputContext,
    );
    const {profileName, isValidProfileName} = authInputState;
    return (
      <View>
        <CommonInput
          ref={ref}
          onSubmit={onJump}
          inputTitle="Nama Profile"
          iconName="user-edit"
          optionalPH={'(bisa diubah)'}
          displayValue={profileName}
          onChangeInput={onProfileNameChange}
          onInputValidation={onProfileNameValidation}
          isValidInput={isValidProfileName}
          min_Input={6}
          keyboardType="default"
          returnKeyType="next"
        />
      </View>
    );
  }),
);
InputProfileName.propTypes = {onJump: PropTypes.func};
export default InputProfileName;
