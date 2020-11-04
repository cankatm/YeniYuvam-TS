import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { CenteredArea } from '@components/centeredAreas';
import { MainHeader } from '@components/headers';
import styles from './styles';

const BlogDetailsScreen = () => {
  return (
    <View>
      <CenteredArea horizontal>
        <MainHeader title='BLOG DETAILS' shouldGoBack />
      </CenteredArea>
    </View>
  );
};

export default BlogDetailsScreen;
