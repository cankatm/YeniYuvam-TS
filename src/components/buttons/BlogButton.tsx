import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import * as defaults from '@helpers/defaults';

interface BlogButtonProps {
  onPress?: Function,
  blogTitle: string,
  imgSource: string
}

const BlogButton:React.FC<BlogButtonProps> = ({ onPress, blogTitle = '', imgSource }) => {
  return (
    <TouchableOpacity disabled={!onPress} onPress={() => onPress ? onPress() : {}} >
      <View style={{ marginBottom: 16 }}>
        <Image source={{ uri: imgSource }} style={{ width: defaults.WIDTH, height: defaults.WIDTH / 2 }} resizeMode='contain'  />
        <Text style={{ marginTop: 4, width: defaults.WIDTH }} >{blogTitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default BlogButton;
