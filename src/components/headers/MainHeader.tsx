import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { BackButton } from '@components/buttons';
import styles from './styles';
import * as colors from '@helpers/colors';
import * as defaults from '@helpers/defaults';

interface MainHeaderProps {
  title: string,
  shouldGoBack?: boolean,
  borderColor?: string,
  backgroundColor?: string
}

const MainHeader: React.FC<MainHeaderProps> = ({ title, shouldGoBack = false, borderColor = colors.transparent, backgroundColor = colors.transparent } : MainHeaderProps) => {
  return (
    <View style={styles.mainHeaderContainer} >
      <View style={{ position: 'absolute', top: 20, left: 0 }} >
        <BackButton shouldGoBack={shouldGoBack} borderColor={borderColor} backgroundColor={backgroundColor} />
      </View>

      <Text style={styles.mainHeaderTitle}>{title}</Text>
    </View>
  );
}

export default MainHeader;

