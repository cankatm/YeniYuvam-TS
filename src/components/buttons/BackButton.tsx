import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import * as colors from '@helpers/colors';
import * as defaults from '@helpers/defaults';


interface BackButtonProps {
  shouldGoBack: boolean,
  borderColor: string,
  backgroundColor: string
}

const BackButton: React.FC<BackButtonProps> = ({ shouldGoBack, borderColor , backgroundColor }) => {
  const navigation = useNavigation();

  if (shouldGoBack) {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={[styles.backButtonContainer, { borderColor, backgroundColor }]} >
          <Text style={styles.backButtonText} >{'<'}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return <></>;
}

export default BackButton;
