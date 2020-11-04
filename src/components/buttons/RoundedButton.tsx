import React from 'react';
import { View, Text } from 'react-native';

import * as colors from '@helpers/colors';
import styles from './styles';

interface RoundedButtonProps {
  backgroundColor?: string,
  textColor?: string,
  text: string
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ backgroundColor = colors.bluePastel, textColor = colors.white, text = '' }) => {
  return (
    <View style={[styles.roundedButtonContainer, { backgroundColor }]} >
      <Text style={[styles.roundedButtonText, { color: textColor }]}>{text}</Text>
    </View>
  )
}

export default RoundedButton;
