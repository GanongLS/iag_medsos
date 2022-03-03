import React, {useContext, memo, forwardRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

//Components Module
import DropDown from '../../../Components/DropDown/DropDown';
import {authInputContext} from '../../../Provider/AuthInputProvider';
import listGender from '../Data/listGender';
import ShortList from '../../../Components/ShortList/ShortList';

const PilihGender = memo(
  forwardRef((props, ref) => {
    const {onJump} = props;
    const {
      authInputState,
      onSetGender,
      onShowGenderDD,
      onHideGenderDD,
    } = useContext(authInputContext);
    const {gender, genValue, ddGenderVisible, isValidGender} = authInputState;
    const genArray = listGender.map((gender, index) => {
      return {id: index.toString(), name: gender.name, value: gender.value};
    });

    return (
      <View>
        <ShortList
          inputTitle="Jenis Kelamin"
          optionalPH={''}
          iconName="venus-mars"
          onJump={onJump}
          modalData={genArray}
          onSetValue={onSetGender}
          visible={ddGenderVisible}
          onShow={onShowGenderDD}
          onHide={onHideGenderDD}
          hideValue={genValue}
          displayValue={gender}
          isValidInput={isValidGender}
        />
        {/* <DropDown
          ref={ref}
          inputTitle="Jenis Kelamin"
          optionalPH={''}
          iconName="venus-mars"
          onJump={onJump}
          modalData={genArray}
          onDataUpdate={onSetGender}
          visible={ddGenderVisible}
          onShow={onShowGenderDD}
          onHide={onHideGenderDD}
          hideValue={genValue}
          displayValue={gender}
          isValidInput={isValidGender}
        /> */}
      </View>
    );
  }),
);
PilihGender.propTypes = {props: PropTypes.object};
export default PilihGender;
