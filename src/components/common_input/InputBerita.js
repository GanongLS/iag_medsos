import React, {useContext, forwardRef} from 'react';
import {TextInput, Text, View} from 'react-native';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import colors from '../../Constants/colors';

//Components Modules
import {commonInputContext} from '../../Provider/CommonInputProvider';

const InputBerita = forwardRef(({onSend}, ref) => {
  // @ localContext TransferProvider Data
  const {
    commonInputData: {notes},
    onNotesChange,
  } = useContext(commonInputContext);
  return (
    <>
      <View>
        <Text
          style={[
            textStyles.formLabel,
            {
              marginVertical: 5,
              fontFamily: 'SanomatSans',
              color: colors.dark,
            },
          ]}>
          Berita
        </Text>

        <View style={globalStyles.underlineContainer}>
          <TextInput
            style={{fontFamily: 'SanomatSans'}}
            placeholder="Masukkan Berita (optional)"
            ref={ref}
            value={notes}
            onChangeText={text => {
              onNotesChange(text);
            }}
            returnKeyType="send"
            placeholderTextColor={colors.gray2}
            onSubmitEditing={() => onSend()}
          />
        </View>
      </View>
    </>
  );
});

export default InputBerita;
