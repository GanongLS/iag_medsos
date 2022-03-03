import React, {useContext, forwardRef} from 'react';
import {TextInput, Text, View} from 'react-native';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import colors from '../../Constants/colors';

//Components Modules
import PilihBank from './PilihBank';
import {commonInputContext} from '../../Provider/CommonInputProvider';

const InputRekeningSumber = forwardRef(({onJump}, ref) => {
  // @ localContext TransferProvider Data
  const {
    commonInputData: {src_account_no, isValidSrcAccount},
    onSrcAccountChange,
    onSrcAccountValidation,
  } = useContext(commonInputContext);

  return (
    <>
      <PilihBank // Karena status !> 0 maka harusnya ga kerender
      />
      <View>
        <Text
          style={{
            ...textStyles.formLabel,
            marginVertical: 5,
            fontFamily: 'SanomatSans',
            color: colors.dark,
          }}>
          Rekening Sumber
        </Text>
        <View style={globalStyles.underlineContainer}>
          <TextInput
            style={{fontFamily: 'SanomatSans'}}
            placeholder="Masukan Rekening Sumber"
            ref={ref}
            value={src_account_no}
            onChangeText={text => {
              onSrcAccountChange(text);
            }}
            onEndEditing={e => onSrcAccountValidation(e.nativeEvent.text)}
            returnKeyType="next"
            placeholderTextColor={colors.gray2}
            keyboardType="number-pad"
            onSubmitEditing={() => onJump()}
          />
        </View>
      </View>
      {isValidSrcAccount ? null : ( // Error rekening penerima
        <View>
          <Text style={textStyles.errorMsg}>Rekening Sumber harus diisi!</Text>
        </View>
      )}
    </>
  );
});

export default InputRekeningSumber;
