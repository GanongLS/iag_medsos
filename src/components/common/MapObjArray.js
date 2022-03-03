import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {Divider} from 'react-native-elements';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import {height} from '../../Constants/constants';

const MapObjArray = memo(({name, value}) => {
  return (
    <View style={globalStyles.grayPresentation}>
      <Text style={{...textStyles.h5Left, paddingVertical: height * 0.008}}>
        {name}
      </Text>
      <Text style={{...textStyles.h4Right, paddingVertical: height * 0.008}}>
        {value}
      </Text>
    </View>
  );
});

const MapObjInline = memo(({name, value}) => {
  return (
    <View style={globalStyles.rowInlineContainer}>
      <Text
        style={{
          ...textStyles.h5Left,
        }}>
        {name}
      </Text>
      <Text
        style={{
          ...textStyles.h4Right,
          paddingTop: height * 0.007,
        }}>
        {value}
      </Text>
    </View>
  );
});

const MapInlineFlex = memo(({name, value}) => {
  return (
    <View style={globalStyles.rowINHContainer}>
      <Text
        style={{
          ...textStyles.h5Left,
          flex: 4,
        }}>
        {name}
      </Text>
      <Text
        style={{
          ...textStyles.h4Right,
          paddingVertical: height * 0.01,
          flex: 6,
        }}>
        {value}
      </Text>
    </View>
  );
});

const MapInlineBold = memo(({name, value}) => {
  return (
    <View style={globalStyles.rowInlineContainer}>
      <Text
        style={{
          ...textStyles.h4Left,
          fontWeight: 'bold',
        }}>
        {name}
      </Text>
      <Text
        style={{
          ...textStyles.h3Right,
          fontWeight: 'bold',
          paddingTop: height * 0.007,
        }}>
        {value}
      </Text>
    </View>
  );
});

const MapObjBold = memo(({name, value}) => {
  return (
    <View style={globalStyles.grayPresentation}>
      <Text
        style={{
          ...textStyles.h4Left,
          fontWeight: 'bold',
          paddingVertical: height * 0.01,
        }}>
        {name}
      </Text>
      <Text
        style={{
          ...textStyles.h3Right,
          fontWeight: 'bold',
          paddingVertical: height * 0.01,
        }}>
        {value}
      </Text>
    </View>
  );
});
const MapSubHead = memo(({text}) => {
  return (
    <>
      <Text
        style={{
          ...textStyles.h3Center,
          marginTop: height * 0.015,
          marginBottom: height * 0.015,
        }}>
        {text}
      </Text>
      <Divider />
    </>
  );
});
export default MapObjArray;
export {MapObjBold, MapObjInline, MapSubHead, MapInlineBold, MapInlineFlex};
