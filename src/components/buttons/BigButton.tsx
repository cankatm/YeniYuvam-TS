import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import * as colors from '@helpers/colors';
import * as defaults from '@helpers/defaults';

interface BigButtonProps {
  backgroundColor: string,
  text: string,
  onPress: Function
}

const BigButton: React.FC<BigButtonProps> = ({ backgroundColor, text, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={[styles.bigButtonContainer, { backgroundColor }]} >
        <Text style={styles.bigButtonText} >{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BigButton;

