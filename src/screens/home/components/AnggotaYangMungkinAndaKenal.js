import React, {memo} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import colors from '../../../constants/colors';
import {height, width} from '../../../constants/constants';
import {containerStyles} from '../../../styles/globalStyles';
var isEmpty = require('lodash.isempty');

const storiesHeight = height > 700 ? 240 : 224;
const peopleProfileHeight = (storiesHeight * 4) / 3;

const anggotaYangData = [
  {
    id: '000',
    name: 'Slamet',
    note: 'Teman kostan di Cisitu, Teman lah pokoknya, deket banget bos.',
    image: `https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350`,
  },
  {
    id: '001',
    name: 'Muhammad',
    note: 'Teman matkul tekdas',
    image: `https://images.pexels.com/photos/10369707/pexels-photo-10369707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350`,
  },
  {
    id: '002',
    name: 'Fadel',
    note: 'Teman matek II',
    image: `https://images.pexels.com/photos/2652088/pexels-photo-2652088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350`,
  },
];

const AnggotaYangMungkinAndaKenal = () => {
  const renderItem = ({item}) => {
    return <ProfileAnggotaYang profile={item} />;
  };
  return (
    <View style={{backgroundColor: 'white', width: width, paddingVertical: 8}}>
      <View style={{paddingLeft: 8}}>
        <Text style={{fontWeight: 'bold'}}>
          Anggota yang mungkin Anda kenal
        </Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: 8}}
        data={anggotaYangData}
        renderItem={renderItem}
        keyExtractor={item => (isEmpty(item) ? '00-1' : item.id.toString())}
      />
      <View style={{alignSelf: 'center', marginVertical: 8}}>
        <Text>Lihat Semua</Text>
      </View>
    </View>
  );
};

const ProfileAnggotaYang = memo(({profile}) => {
  const {image, name, note} = profile;
  return (
    <View style={{flexGrow: 1, paddingVertical: 4}}>
      <View
        style={{
          flexGrow: 1,
          // height: peopleProfileHeight,
          width: ((width - 24) * 2) / 3,
          borderRadius: 8,
          marginHorizontal: 2.4,
          borderWidth: 0.3,
          backgroundColor: colors.gray99,
          borderColor: colors.gray60,
        }}>
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: (peopleProfileHeight * 5) / 7,
            width: '100%',
            resizeMode: 'cover',
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
          }}
        />
        {/* last */}
        <View
          style={{
            flexGrow: 1,
            minHeight: (peopleProfileHeight * 2) / 7,
            width: '100%',
            margin: 0,
            padding: 2,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingHorizontal: 12,
            paddingTop: 8,
            paddingBottom: 12,
          }}>
          <View style={{marginBottom: 8}}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>{name}</Text>
            <Text
              style={{
                color: colors.gray50,
                fontSize: 12,
              }}>
              {note}
            </Text>
          </View>

          <View style={{width: '100%', ...containerStyles.rowSpaceBetween}}>
            <TouchableOpacity
              style={{
                ...profileStyles.button,
                backgroundColor: colors.primary,
              }}>
              <View style={{...containerStyles.rowSpaceAround}}>
                <IIcon
                  name="hand-left"
                  color="white"
                  size={16}
                  style={{
                    marginRight: 4,
                    textAlign: 'center',
                    alignSelf: 'center',
                  }}
                />
                <Text style={{color: 'white', fontWeight: '600', fontSize: 12}}>
                  Silaturahim
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{...profileStyles.button}}>
              <Text
                style={{
                  color: colors.gray30,
                  fontWeight: '600',
                  fontSize: 12,
                }}>
                Abaikan
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
});

const profileStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
});

export default AnggotaYangMungkinAndaKenal;
