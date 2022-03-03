import React, {memo} from 'react';
import {Button} from 'react-native-elements';
import gamais from '../../constants/colors';
import {useAppState} from '../../providers/AppProvider';
import globalStyles from '../../styles/globalStyles';

const ButtonWithLoading = memo(({judul, onPress}) => {
  const {isLoading} = useAppState();
  return (
    <Button
      raised
      rounded
      title={judul}
      titleStyle={{color: gamais.dark}}
      containerStyle={{...globalStyles.buttonContainer}}
      buttonStyle={{
        ...globalStyles.button,
        opacity: isLoading ? 0.8 : 1,
        backgroundColor: gamais.p90,
        // elevation: 4,
      }}
      loading={isLoading}
      disabled={isLoading}
      backgroundColor={gamais.primary}
      onPress={() => onPress()}
      // elevation={2}
    />
  );
});

export default ButtonWithLoading;
