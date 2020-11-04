import _ from 'lodash';
import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import * as colors from '@helpers/colors';
import * as defaults from '@helpers/defaults';

const photos = [1, 2, 3, 4, 5];

const ImageSlider = () => {
  // let photos = props.photos;
  // _.remove(photos, photo => photo === null);
  const [currentIndex, changeCurrentIndex] = useState(1);

  return (
    <View
      style={{
        width: defaults.WIDTH_FULL,
        height: defaults.WIDTH_FULL,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        overflow: 'hidden',
      }}
    >
      <Swiper
        loop={false}
        showsButtons={false}
        height={defaults.WIDTH_FULL}
        showsPagination={false}
        onIndexChanged={index => changeCurrentIndex(index + 1)}
      >
        {photos.map((photo, index) => {
          return (
            <Image
              source={{
                uri: `https://picsum.photos/${Math.floor(
                  defaults.WIDTH_FULL
                )}/${Math.floor(defaults.WIDTH_FULL)}`,
              }}
              style={{
                width: defaults.WIDTH_FULL,
                height: defaults.WIDTH_FULL,
              }}
              key={index}
            />
          );
        })}
        {/* {photos.map((photo, index) => {
          if (photo) {
            return (
              <Image
                source={{ uri: Object.values(photo).join('') }}
                key={index}
                style={{
                  width: defaults.SLIDER_IMAGE_SIZE,
                  height: defaults.SLIDER_IMAGE_SIZE
                }}
                resizeMode='cover'
              />
            );
          }
        })} */}
      </Swiper>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          position: 'absolute',
          right: 20,
          bottom: 20,
        }}
      >
        <Text>
          {currentIndex} / {photos.length}
        </Text>
      </View>
    </View>
  );
};

export default ImageSlider;
