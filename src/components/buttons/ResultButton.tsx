import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { RoundedButton } from '@components/buttons';
import styles from './styles';
import * as colors from '@helpers/colors';
import * as defaults from '@helpers/defaults';

interface ResultButtonProps {
  imgSource: string,
  petName: string,
  petAge: number,
  onPress: Function
}

const ResultButton: React.FC<ResultButtonProps> = ({ imgSource, petName, petAge, onPress }) => {
  console.log(imgSource);
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Image
        source={{ uri: imgSource }}
        style={styles.resultButtonImage}
        resizeMode='contain'
      />
      <View style={styles.resultButtonBadgeContainer} >
        <RoundedButton text='Ankara' />
      </View>
      <Text style={styles.resultButtonText}>
        {petName}, {petAge}
      </Text>
    </TouchableOpacity>
  );
};

export default ResultButton;
