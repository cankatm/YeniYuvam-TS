import React from 'react';
import { View, Text, TextInput } from 'react-native';

import * as defaults from '@helpers/defaults';
import styles from './styles';

interface InputProps {
  label: string,
  ref?: React.RefObject<TextInput>,
  onChangeText?: Function,
  value?: string,
  autoCapitalize?: string,
  returnKeyType?: string,
  keyboardType?: string,
  onSubmitEditing?: Function,
  secureTextEntry?: boolean,
}

const Input: React.FC<InputProps> = ({ label, ...props }, ref) => {
  // const { label, ...props } = props;
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputTextAreaContainer}>
        <Text>{label}</Text>
      </View>
      <TextInput
        ref={ref}
        {...props}
        autoCorrect={false}
        blurOnSubmit={true}
        style={styles.inputTextInput}
      />
    </View>
  );
};

export default React.forwardRef(Input);
