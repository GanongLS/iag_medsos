import React, {useContext, memo} from 'react';
import {Text, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import {height, width} from '../../Constants/constants';
import colors from '../../Constants/colors';

//Components Modules
import {userContext} from '../../Provider/UserProvider';

const RekeningTeller = memo(({title}) => {
  //isi title "Rekening Debet" ketika sebagai sumber atau "rekening Kredit" ketika sebagai penerima.
  // @ global Context UserProvider
  const {
    userState: {
      userLoginData: {account_no},
    },
  } = useContext(userContext);

  return (
    <View // @ Rekening kredit langsung terisi automatis
    >
      <Text
        style={{
          ...textStyles.formLabel,
          fontFamily: 'SanomatSans',
          color: colors.dark,
        }}>
        {title}
        <MaterialCommunityIcons
          name="alert-circle-outline"
          color={account_no ? 'transparent' : colors.red}
        />
      </Text>
      <View style={globalStyles.underlineContainer}>
        <View
          style={{
            width: '90%',
            height: height * 0.055,
            justifyContent: 'center',
          }}>
          <Text style={textStyles.h4Left}>
            {account_no ? account_no : null}
          </Text>
        </View>
      </View>
    </View>
  );
});

export default RekeningTeller;
