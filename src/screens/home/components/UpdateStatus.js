import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import colors, {html} from '../../../constants/colors';
import {width} from '../../../constants/constants';
import globalStyles, {
  containerStyles,
  imageStyles,
} from '../../../styles/globalStyles';
var isEmpty = require('lodash.isempty');

const UpdateStatus = () => {
  return (
    <View
      style={{
        width: width,
        height: 104,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <InputUpdateStatus />
      <View style={{...containerStyles.rowCenter, flex: 1}}>
        <IconJenisUpdate
          namaIcon="md-create-outline"
          warnaIcon={html.Indigo}
          jenisUpdate="Status"
        />
        <IconJenisUpdate
          namaIcon="md-images"
          warnaIcon={colors.primary}
          jenisUpdate="Photo"
        />
        <IconJenisUpdate
          namaIcon="md-location-sharp"
          warnaIcon={colors.red}
          jenisUpdate="Menginap"
        />
      </View>
    </View>
  );
};

const IconJenisUpdate = ({namaIcon, warnaIcon, jenisUpdate}) => {
  return (
    <View
      style={{
        ...containerStyles.rowCenter,
        flexGrow: 1,
        borderRightWidth: 0.5,
        borderRightColor: colors.gray70,
      }}>
      <IIcon name={namaIcon} color={warnaIcon} size={16} />
      <Text
        style={{
          fontSize: 11,
          marginLeft: 4,
          color: colors.gray50,
          fontWeight: 'bold',
        }}>
        {jenisUpdate}
      </Text>
    </View>
  );
};

const InputUpdateStatus = () => {
  return (
    <View style={containerStyles.center}>
      <View
        style={{
          ...containerStyles.rowSpaceBetween,
          padding: 12,
          borderWidth: 0.5,
          borderColor: colors.gray70,
        }}>
        <View style={{...globalStyles.centerContainer}}>
          <Image
            source={require('../../../assets/images/empty-profile.png')}
            style={{
              ...imageStyles.statusProfile,
            }}
            resizeMethod="resize"
          />
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            borderWidth: 0.5,
            borderRadius: 20,
            height: 36,
            marginLeft: 12,
            paddingHorizontal: 12,
            paddingBottom: 0,
            borderColor: colors.gray70,
            justifyContent: 'center',
          }}>
          <Text style={{color: colors.gray50}}>Apa yang Anda pikirkan?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateStatus;
