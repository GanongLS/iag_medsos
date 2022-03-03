import {Dimensions, Platform} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const height = screenHeight > screenWidth ? screenHeight : screenWidth;
export const width = screenWidth > screenHeight ? screenHeight : screenWidth;

export const baseUrl =
  'http://orion.ihsansolusi.co.id:8002/backend-bmt-bus-mobile-ao/public/api';

export const SanomatSans =
  Platform.OS === 'ios' ? 'Sanomat Sans Web' : 'SanomatSans';
