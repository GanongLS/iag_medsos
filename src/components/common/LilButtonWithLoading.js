import React, {memo, useContext} from 'react';
import {Button} from 'react-native-elements';
import colors from '../../Constants/colors';
import {userContext} from '../../Provider/UserProvider';
import globalStyles from '../../Styles/globalStyles';

const LilButtonWithLoading = memo(({judul, onPress}) => {
  const {
    userState: {isLoading},
  } = useContext(userContext);
  return (
    <Button
      // key={keygent}
      rounded
      title={judul}
      containerStyle={{...globalStyles.buttonContainer, width: '30%'}}
      buttonStyle={{
        ...globalStyles.button,
        opacity: isLoading ? 0.8 : 1,
      }}
      loading={isLoading}
      disabled={isLoading}
      backgroundColor={colors.primary}
      onPress={() => onPress()}
    />
  );
});

export default LilButtonWithLoading;
