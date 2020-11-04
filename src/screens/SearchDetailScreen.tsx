import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { CenteredArea } from '@components/centeredAreas';
import { BackButton } from '@components/buttons';
import { ImageSlider } from '@components/imageSlider';
import styles from './styles';
import * as colors from '@helpers/colors';
import * as defaults from '@helpers/defaults';

const SearchDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // TODO: add proper object types to item
  const { item } = route.params;

  console.log(item);
  return (
    <View>
      {/* <Image source={{ uri: `https://picsum.photos/${defaults.WIDTH_FULL}/${defaults.WIDTH_FULL}` }} style={{ width: defaults.WIDTH_FULL, height: defaults.WIDTH_FULL }} /> */}
      <ImageSlider />

      <View style={{ position: 'absolute', top: 20, left: 32 }}>
        <BackButton
          shouldGoBack
          borderColor={colors.blueDark}
          backgroundColor={colors.white}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('SearchDetailScreen')}
      >
        <Text> SearchResultsScreen </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchDetailScreen;
