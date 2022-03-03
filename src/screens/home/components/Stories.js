import React, {memo} from 'react';
import {FlatList, Image, ImageBackground, Text, View} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import {GreyGradient} from '../../../components/gradient/GradView';
import colors from '../../../constants/colors';
import {height, width} from '../../../constants/constants';
import {imageStyles} from '../../../styles/globalStyles';
var isEmpty = require('lodash.isempty');

const postHeight = height > 700 ? 600 : 480;
const storiesHeight = height > 700 ? 240 : 224;

const storiesData = [
  {},
  {
    id: '012qwe',
    name: 'William Smith',
    profilePicture: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=130`,
    storyImage: `https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=130`,
  },
  {
    id: '011asd',
    name: 'Julia Rainheart',
    profilePicture: `https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=130`,
    storyImage: `https://images.pexels.com/photos/9469926/pexels-photo-9469926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=130`,
  },
  {
    id: '001abc',
    name: 'Issac Baker',
    profilePicture: `https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=130`,
    storyImage: `https://images.pexels.com/photos/1546901/pexels-photo-1546901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=130`,
  },
  {
    id: '035ewr',
    name: 'James Ball',
    profilePicture: `https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=130`,
    storyImage: `https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=130`,
  },
  {
    id: '022awe',
    name: 'Diana Robbert',
    profilePicture: `https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=130`,
    storyImage: `https://images.pexels.com/photos/2270328/pexels-photo-2270328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=130`,
  },
];

const Stories = () => {
  const renderItem = ({item}) => {
    if (isEmpty(item)) {
      return <CreateStory />;
    }
    return <Story story={item} />;
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: storiesHeight,
        width: width,
      }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={storiesData}
        renderItem={renderItem}
        keyExtractor={item => (isEmpty(item) ? '000' : item.id.toString())}
      />
    </View>
  );
};

const Story = memo(({story}) => {
  const {name, profilePicture, storyImage} = story;
  return (
    <View style={{flexGrow: 1, paddingVertical: 12}}>
      <View
        style={{
          height: storiesHeight - 24,

          width: (width - 24) / 3.1,
          borderRadius: 12,
          marginHorizontal: 2.4,
          borderWidth: 1,
          // backgroundColor: colors.gray60,
          borderColor: colors.gray60,
        }}>
        <ImageBackground
          source={{
            uri: storyImage,
          }}
          style={{
            height: storiesHeight - 24,
            width: (width - 24) / 3.1,
            resizeMode: 'cover',
          }}
          imageStyle={{borderRadius: 11.5}}>
          <GreyGradient
            style={{
              borderRadius: 11.5,
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              padding: 8,
            }}>
            <View
              style={{
                height: 40,
                width: 40,
                borderWidth: 2,
                borderColor: colors.primary,
                borderRadius: 40 / 2,
                margin: 0,
                padding: 2,
              }}>
              <Image
                source={{
                  uri: profilePicture,
                }}
                style={{
                  height: 32,
                  width: 32,
                  borderRadius: 32 / 2,
                  // margin: 4,
                }}
              />
            </View>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 11}}>
              {name}
            </Text>
          </GreyGradient>
        </ImageBackground>
      </View>
    </View>
  );
});

const CreateStory = memo(() => {
  return (
    <View style={{paddingVertical: 12, marginLeft: 12}}>
      <View
        style={{
          height: storiesHeight - 24,
          backgroundColor: colors.gray60,
          width: (width - 24) / 3.1,
          borderRadius: 12,
          marginHorizontal: 2.4,
          borderWidth: 0.8,
          borderColor: colors.gray70,
        }}>
        <View style={{flex: 3}}>
          <ImageBackground
            source={require('../../../assets/images/empty-profile.png')}
            style={{
              ...imageStyles.createStory,
            }}
            imageStyle={{borderTopRightRadius: 11, borderTopLeftRadius: 11}}
            // resizeMethod="resize"
          />
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: colors.gray98,
            borderBottomLeftRadius: 11,
            borderBottomRightRadius: 11,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 6,
          }}>
          <Text style={{fontSize: 11, color: colors.gray20}}>Buat Cerita</Text>
        </View>
        <View
          style={{
            top: ((storiesHeight - 24) * 3) / 5 - 20,
            height: 32,
            width: 32,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            position: 'absolute',
            borderRadius: 16,
            backgroundColor: 'white',
          }}>
          <IIcon
            name="add-circle-sharp"
            color={colors.primary}
            size={32}
            style={{
              top: -1,
              right: -1,
              height: 32,
              width: 32,
              textAlign: 'center',
              alignSelf: 'center',
            }}
          />
        </View>
      </View>
    </View>
  );
});

export default Stories;
