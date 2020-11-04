import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CenteredArea } from '@components/centeredAreas';
import { MainHeader } from '@components/headers';
import { BlogButton } from '@components/buttons';
import styles from './styles';
import * as defaults from '@helpers/defaults';

const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const BlogScreen: React.FC = () => {
  const navigation = useNavigation();

  const renderBlogButtons = ({ item }) => {
    return (
      <BlogButton
        onPress={() => navigation.navigate('BlogDetailsScreen', { item })}
        blogTitle='ÇOCUKLU AİLELERE EN UYGUN KÖPEK CİNSLERİAİLELERE EN UYGUN KÖPEK CİNSLERİAİLELERE EN UYGUN KÖPEK CİNSLERİAİLELERE EN UYGUN KÖPEK CİNSLERİAİLELERE EN UYGUN KÖPEK CİNSLERİ'
        imgSource={`https://picsum.photos/${Math.floor(defaults.WIDTH)}/${Math.floor(defaults.WIDTH / 2)}`}
      />
    )
  }
  return (
    <View>
      <CenteredArea horizontal>
        <MainHeader title='BLOG' />
      </CenteredArea>

      <CenteredArea horizontal>
        <FlatList
          showsVerticalScrollIndicator={false}
          // style={{width: '100%', height: '100%'}}
          data={tempArr}
          renderItem={renderBlogButtons}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
          // contentContainerStyle={{ width: defaults.WIDTH }}
          ListFooterComponent={<View style={{ height: 200 }} />}
        />
      </CenteredArea>
    </View>
  );
};

export default BlogScreen;
