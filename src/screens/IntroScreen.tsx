import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RoundedButton } from '@components/buttons';

const IntroScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('MainTab')}>
        <Text> IntroScreen</Text>
      </TouchableOpacity>

      <RoundedButton />
    </View>
  );
};

export default IntroScreen;
