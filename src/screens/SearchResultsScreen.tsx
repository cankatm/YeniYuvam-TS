import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { CenteredArea } from '@components/centeredAreas';
import { MainHeader } from '@components/headers';
import { ResultButton } from '@components/buttons';
import * as defaults from '@helpers/defaults';
import styles from './styles';

const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: add proper object types to item

const SearchResultsScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const response = await API.graphql(graphqlOperation(listPosts));
  //     console.log(response);
  //     setPosts(response.data.listPosts.items);
  //   };

  //   getPosts();
  // }, []);

  const renderResultButtons = ({ item }) => {
    return (
      <ResultButton
        onPress={() => navigation.navigate('SearchDetailScreen', { item })}
        petName={item.postPetName}
        petAge={item.postPetAge}
        imgSource={`https://picsum.photos/${Math.floor(
          defaults.WIDTH_SMALL
        )}/${Math.floor(defaults.WIDTH_SMALL)}`}
      />
    );
  };

  return (
    <View>
      <CenteredArea horizontal>
        <MainHeader title='SONUÇLAR' shouldGoBack />
      </CenteredArea>

      <CenteredArea horizontal>
        <FlatList
          showsVerticalScrollIndicator={false}
          // style={{width: '100%', height: '100%'}}
          data={tempArr}
          renderItem={renderResultButtons}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          // contentContainerStyle={{ width: defaults.WIDTH }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            width: defaults.WIDTH,
          }}
          ListFooterComponent={<View style={{ height: 200 }} />}
        />
      </CenteredArea>
    </View>
  );
};

export default SearchResultsScreen;
